# 📝 Modern To-Do List App

A beautiful, feature-rich to-do list application built with vanilla HTML, CSS, and JavaScript. Features a modern glassmorphism design with light/dark mode toggle and comprehensive task management capabilities.

![To-Do App Preview](https://img.shields.io/badge/Status-Complete-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

### 🎨 **Modern Design**
- **Glassmorphism UI**: Beautiful translucent design with backdrop blur effects
- **Gradient Backgrounds**: Dynamic animated gradient orbs
- **Smooth Animations**: Fluid transitions and micro-interactions
- **Responsive Layout**: Perfect on desktop, tablet, and mobile devices

### 🌙 **Theme System**
- **Light/Dark Mode**: Toggle between modern light and dark themes
- **Theme Persistence**: Remembers your preference across sessions
- **Smooth Transitions**: Seamless theme switching with animations
- **Accessible Colors**: High contrast ratios for better readability

### 📋 **Task Management**
- **Add Tasks**: Quick task creation with Enter key or button click
- **Edit Tasks**: Inline editing by clicking the edit button
- **Complete Tasks**: Check/uncheck tasks with visual feedback
- **Delete Tasks**: Remove individual tasks with confirmation
- **Bulk Actions**: Clear all completed tasks or all tasks at once

### 🔍 **Filtering & Organization**
- **Smart Filters**: View All, Pending, or Completed tasks
- **Task Counter**: Real-time count of total, completed, and pending tasks
- **Empty States**: Friendly messages when no tasks are present
- **Auto-Save**: All tasks automatically saved to local storage

### 🚀 **User Experience**
- **Keyboard Shortcuts**: 
  - `Enter` to add tasks
  - `Escape` to cancel editing
  - `Ctrl/Cmd + Enter` for quick add
- **Visual Feedback**: Notifications for all actions
- **Drag Effects**: Hover animations and visual state changes
- **Loading States**: Smooth animations for task operations

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with CSS custom properties (variables)
- **Vanilla JavaScript**: Pure JavaScript with no dependencies
- **Font Awesome**: Beautiful icons for enhanced UI
- **Google Fonts**: Poppins font for modern typography
- **Local Storage**: Client-side data persistence

## 📁 Project Structure

```
to_do_list_app/
├── index.html          # Main HTML structure
├── style.css           # Modern CSS with theme system
├── app.js             # JavaScript functionality
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/victorke485/to-do-list-app.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd to-do-list-app
   ```

3. **Open in your browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local server for development:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   ```

4. **Start using the app!**
   - Add your first task
   - Toggle between themes
   - Enjoy the modern interface

## 📱 Usage Guide

### Adding Tasks
1. Type your task in the input field
2. Press `Enter` or click the `+` button
3. Your task appears in the list instantly

### Managing Tasks
- **Complete**: Click the checkbox to mark as done
- **Edit**: Click the edit icon (pencil) to modify the task
- **Delete**: Click the delete icon (trash) to remove the task

### Filtering Tasks
- **All**: Shows all tasks regardless of status
- **Pending**: Shows only incomplete tasks
- **Completed**: Shows only finished tasks

### Theme Switching
- Click the theme toggle button (sun/moon icon) in the top-right corner
- Your preference is automatically saved

### Bulk Actions
- **Clear Completed**: Removes all finished tasks
- **Clear All**: Removes all tasks (with confirmation)

## 🎨 Color Palette

### Light Mode
- **Primary**: Purple gradient (#7c6df0 → #a855f7)
- **Background**: Light with colorful orbs
- **Text**: Dark for high contrast
- **Surfaces**: Semi-transparent white

### Dark Mode
- **Primary**: Deep purple gradient (#1e1b4b → #581c87)
- **Background**: Dark with subtle orbs
- **Text**: Light for readability
- **Surfaces**: Semi-transparent dark

## 🔧 Customization

### Adding New Themes
1. Define new color variables in CSS:
```css
[data-theme="custom"] {
    --bg-primary: your-gradient;
    --text-primary: your-color;
    /* Add other variables */
}
```

2. Update the theme toggle JavaScript to include your new theme

### Modifying Colors
- Edit the CSS custom properties in `style.css`
- All colors are centralized in the `:root` selector
- Changes will automatically apply throughout the app

### Adding Features
- The code is well-organized and commented
- Add new functions to `app.js`
- Style new elements using the existing design system

## 📱 Browser Compatibility

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Ideas for Contributions
- 🌍 Internationalization (i18n)
- 📊 Task analytics and statistics
- 🏷️ Task categories and tags
- ⏰ Due dates and reminders
- 📤 Export/import functionality
- 🔍 Search functionality
- 📱 PWA features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Font Awesome** for the beautiful icons
- **Google Fonts** for the Poppins typeface
- **CSS Tricks** for glassmorphism inspiration
- **MDN Web Docs** for excellent documentation

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/victorke485/to-do-list-app/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about the problem

## 🔮 Future Enhancements

- [ ] Drag and drop task reordering
- [ ] Task priority levels
- [ ] Due date reminders
- [ ] Task categories/projects
- [ ] Data export/import
- [ ] Collaboration features
- [ ] Mobile app version
- [ ] Cloud synchronization
- [ ] Advanced search and filtering
- [ ] Task templates

---

<div align="center">

**Made with ❤️ using vanilla web technologies**

[⭐ Star this repo](https://github.com/victorke485/to-do-list-app) if you found it helpful!

</div>

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/victorke485/to-do-list-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/victorke485/to-do-list-app?style=social)
![GitHub issues](https://img.shields.io/github/issues/victorke485/to-do-list-app)
![GitHub license](https://img.shields.io/github/license/victorke485/to-do-list-app)

---

*This README was generated with ❤️ for the modern to-do list app*