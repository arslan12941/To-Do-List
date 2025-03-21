# To-Do List Web Application

A simple interactive task manager with active/completed tasks sections and visual feedback.

## Features
- **Task Management**:
  - Add new tasks
  - Mark tasks as complete/incomplete
  - Delete tasks permanently
- **Visual Design**:
  - Dual-column layout (Active/Completed)
  - Shadow effects and hover states
  - Color-coded status indicators
  - Responsive containers
- **Interactive Elements**:
  - Checkbox toggles
  - Delete confirmation
  - Input validation

## Compatibility
**Browsers**:  
✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  

**Devices**:  
🖥️ Desktop (optimized)  
📱 Tablet (responsive)  

## File Structure
**HTML**  
`to-do-list.html` - Core structure and layout containers  

**CSS**  
`to-do-list.css` - Styling rules and visual hierarchy  

**JS**  
`to-do-list.js` - Task management logic and DOM manipulation  

## Setup
1. **Requirements**:
   - Modern web browser
   - Text editor (VS Code, Notepad++, etc.)

2. **Installation**:
   - Download all three files
   - Keep in the same directory
   - Open `to-do-list.html` in browser

## Usage
**Basic Operations**:
1. Type task in input field
2. Click ADD to create task
3. Checkbox = Mark complete (moves to Completed section)
4. X button = Permanent deletion

**Visual Feedback**:
- Completed tasks show strikethrough
- Red shadow containers for visual separation
- Immediate UI updates on actions

## Customization
**Visual**:
- Modify container colors/shadow styles
- Adjust container widths
- Change font sizes
- Customize button designs

**Functional**:
- Add due dates
- Implement local storage
- Add priority levels
- Enable task editing

## Notes
- Uses inline event handlers for simplicity
- No persistent storage (resets on page reload)
- Mobile-first responsive foundation
- Pure JavaScript implementation
