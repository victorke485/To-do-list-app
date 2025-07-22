// DOM Elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const taskCount = document.getElementById('taskCount');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompleted');
const clearAllBtn = document.getElementById('clearAll');
const emptyState = document.getElementById('emptyState');
const currentDate = document.getElementById('currentDate');

// Application State
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    displayCurrentDate();
    renderTodos();
    updateTaskCount();
});

// Display Current Date
function displayCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    currentDate.textContent = now.toLocaleDateString('en-US', options);
}

// Event Listeners
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        renderTodos();
    });
});

clearCompletedBtn.addEventListener('click', clearCompleted);
clearAllBtn.addEventListener('click', clearAll);

// Add New Todo
function addTodo() {
    const text = todoInput.value.trim();
    
    if (text === '') {
        showNotification('Please enter a task!', 'error');
        return;
    }
    
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    todos.unshift(newTodo);
    todoInput.value = '';
    saveTodos();
    renderTodos();
    updateTaskCount();
    showNotification('Task added successfully!', 'success');
}

// Toggle Todo Completion
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        
        // Add visual feedback
        const todoItem = document.querySelector(`[data-id="${id}"]`);
        todoItem.classList.add('completing');
        
        setTimeout(() => {
            saveTodos();
            renderTodos();
            updateTaskCount();
            showNotification(
                todo.completed ? 'Task completed!' : 'Task marked as pending',
                todo.completed ? 'success' : 'info'
            );
        }, 150);
    }
}

// Delete Todo
function deleteTodo(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        todos = todos.filter(t => t.id !== id);
        saveTodos();
        renderTodos();
        updateTaskCount();
        showNotification('Task deleted!', 'info');
    }
}

// Edit Todo
function editTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    
    const todoItem = document.querySelector(`[data-id="${id}"]`);
    const todoText = todoItem.querySelector('.todo-text');
    const currentText = todo.text;
    
    // Create edit input
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'edit-input';
    editInput.value = currentText;
    editInput.maxLength = 100;
    
    // Replace text with input
    todoText.replaceWith(editInput);
    editInput.focus();
    editInput.select();
    
    // Handle save
    function saveEdit() {
        const newText = editInput.value.trim();
        if (newText && newText !== currentText) {
            todo.text = newText;
            saveTodos();
            showNotification('Task updated!', 'success');
        }
        renderTodos();
    }
    
    // Handle cancel
    function cancelEdit() {
        renderTodos();
    }
    
    // Event listeners for edit input
    editInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            saveEdit();
        } else if (e.key === 'Escape') {
            cancelEdit();
        }
    });
    
    editInput.addEventListener('blur', saveEdit);
}

// Render Todos
function renderTodos() {
    // Clear current list
    todoList.innerHTML = '';
    
    // Filter todos based on current filter
    let filteredTodos = todos;
    switch (currentFilter) {
        case 'pending':
            filteredTodos = todos.filter(t => !t.completed);
            break;
        case 'completed':
            filteredTodos = todos.filter(t => t.completed);
            break;
        default:
            filteredTodos = todos;
    }
    
    // Show/hide empty state
    if (filteredTodos.length === 0) {
        emptyState.classList.add('show');
        if (currentFilter === 'pending') {
            emptyState.querySelector('p').textContent = 'No pending tasks!';
        } else if (currentFilter === 'completed') {
            emptyState.querySelector('p').textContent = 'No completed tasks!';
        } else {
            emptyState.querySelector('p').textContent = 'No tasks yet. Add one above!';
        }
    } else {
        emptyState.classList.remove('show');
    }
    
    // Render each todo
    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.dataset.id = todo.id;
        
        li.innerHTML = `
            <div class="todo-checkbox ${todo.completed ? 'checked' : ''}" onclick="toggleTodo(${todo.id})">
                ${todo.completed ? '<i class="fas fa-check"></i>' : ''}
            </div>
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <div class="todo-actions">
                <button class="edit-btn" onclick="editTodo(${todo.id})" title="Edit task">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn" onclick="deleteTodo(${todo.id})" title="Delete task">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        todoList.appendChild(li);
    });
}

// Update Task Count
function updateTaskCount() {
    const totalTasks = todos.length;
    const completedTasks = todos.filter(t => t.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    
    if (totalTasks === 0) {
        taskCount.textContent = '0 tasks';
    } else {
        taskCount.textContent = `${totalTasks} task${totalTasks !== 1 ? 's' : ''} (${completedTasks} completed, ${pendingTasks} pending)`;
    }
}

// Clear Completed Tasks
function clearCompleted() {
    const completedCount = todos.filter(t => t.completed).length;
    
    if (completedCount === 0) {
        showNotification('No completed tasks to clear!', 'info');
        return;
    }
    
    if (confirm(`Delete ${completedCount} completed task${completedCount !== 1 ? 's' : ''}?`)) {
        todos = todos.filter(t => !t.completed);
        saveTodos();
        renderTodos();
        updateTaskCount();
        showNotification('Completed tasks cleared!', 'success');
    }
}

// Clear All Tasks
function clearAll() {
    if (todos.length === 0) {
        showNotification('No tasks to clear!', 'info');
        return;
    }
    
    if (confirm(`Delete all ${todos.length} task${todos.length !== 1 ? 's' : ''}? This action cannot be undone.`)) {
        todos = [];
        saveTodos();
        renderTodos();
        updateTaskCount();
        showNotification('All tasks cleared!', 'success');
    }
}

// Save Todos to Local Storage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Show Notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `;
    
    // Add animation keyframes if not exists
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Get notification icon
function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'info': return 'fa-info-circle';
        default: return 'fa-info-circle';
    }
}

// Get notification color
function getNotificationColor(type) {
    switch (type) {
        case 'success': return '#10b981';
        case 'error': return '#ef4444';
        case 'info': return '#3b82f6';
        default: return '#6b7280';
    }
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to add task
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        addTodo();
    }
    
    // Escape to clear input
    if (e.key === 'Escape' && document.activeElement === todoInput) {
        todoInput.value = '';
        todoInput.blur();
    }
});

// Auto-focus input on page load
window.addEventListener('load', function() {
    todoInput.focus();
});

// Export functions to global scope for onclick handlers
window.toggleTodo = toggleTodo;
window.deleteTodo = deleteTodo;
window.editTodo = editTodo;
