# 🎮 Bubblitz — A Timed Reflex & Focus Number Game

**Bubblitz** is a fast-paced, browser-based game built with a modern front-end stack.  
It challenges players to maintain focus, speed, and accuracy while reacting to increasingly complex visual behaviors — all under time pressure.

Designed and engineered as a **scalable, animation-heavy React application**, Bubblitz showcases advanced front-end architecture, state management, and performance-driven animation techniques.

---

## 🧠 Game Overview

At each level, players are presented with a set of dynamically generated balls, each containing a numerical value.

### 🎯 Objective
Pop the balls **in the correct order**:
- **Ascending** (lowest → highest), or
- **Descending** (highest → lowest)

The required order is randomly determined per level, forcing players to stay alert and adapt quickly.

---

## ⏱️ Timed Gameplay & Progression

- The game **starts from Level 1** with generous time limits.
- As players progress, **time is reduced at specific milestone levels**, significantly increasing difficulty.
- Failure to clear a level before time runs out results in **Game Over**.
- Extra lives are awarded **every 10 levels cleared**, rewarding consistency and precision.

This time-based progression creates a strong balance between **speed, accuracy, and decision-making under pressure**.

---

## ✨ Core Gameplay Features

- 🎲 **Randomized Ball Generation**
- 🔢 **Ascending / Descending Order Challenges**
- ❤️ **Three-Life System** with bonus life rewards
- ⏳ **Timed Levels with Dynamic Time Reduction**
- 🌗 **Light & Dark Theme Modes**
- 🎯 **Clear Visual Feedback for Correct & Incorrect Actions**
- 🔁 **Replayable, Non-Predictable Gameplay**

---

## 🌀 Advanced Ball Behaviors

As levels increase, balls gain additional independent behaviors, often combined simultaneously:

- 🏃 **Movement** (horizontal / vertical directions)
- 🔄 **Rotation** (clockwise or counter-clockwise)
- 👻 **Value Vanishing & Reappearing**
- 📏 **Dynamic Size Changes** (shrink & restore)
- 🧠 **Randomized Behavior Assignment per Ball**

Each behavior is modular and level-driven, allowing the game to scale in complexity without increasing code fragility.

---

## ⚙️ Architecture & Performance

- Smooth, frame-accurate animations powered by **`requestAnimationFrame`**
- Centralized game state using **React Context**
- Strongly-typed game entities using **TypeScript discriminated unions**
- Custom hooks for:
  - Container size tracking
  - Timers
  - Game quitting & cleanup
- Clean separation between:
  - Game logic
  - Animation logic
  - UI components
- Predictable re-render behavior and animation cleanup

The architecture is intentionally built to be **extensible, testable, and maintainable**.

---

## 🛠️ Tech Stack

### Core Technologies
- **React** — Component-based UI architecture
- **TypeScript** — Type safety, scalability, and maintainability
- **JavaScript (ES6+)** — Game logic & utilities
- **HTML5** — Semantic structure
- **CSS3** — Animations, transitions, and theming

### Advanced Techniques
- **React Hooks** — `useState`, `useEffect`, `useRef`, `useContext`
- **requestAnimationFrame** — High-performance motion handling
- **Dynamic inline animations** combined with CSS keyframes
- **Context-driven game state management**

---

## 🌗 Theme Support

- Fully implemented **Light Mode / Dark Mode**
- Theme state shared globally
- Visual clarity preserved across all animations and levels

---

## 📸 Game Screenshots

- **Main Page** — Landing screen and theme presentation  
![Image](src/assets/images/MainPage.png)


- **How-To-Play Page** — Clear instructions and gameplay rules  
![Image](src/assets/images/HowToPage.png)


- **Play Page** — Live gameplay area with animations, timer, and HUD  
![Image](src/assets/images/PlayPage.png)

---

## 🎯 Project Goals & Developer Focus

This project was built to:

- Demonstrate **advanced front-end engineering skills**
- Explore **real-time animation systems** in React
- Apply **TypeScript for complex game state modeling**
- Build a **non-trivial, scalable interactive application**
- Showcase clean, production-ready front-end architecture

---

## 👨‍💻 About this Game App

Bubblitz is developed with a strong focus on:

- Modern React patterns
- Type-safe application design
- Performance-conscious animation systems
- Clean, maintainable codebases
- User-centric interactive experiences

This project reflects real-world front-end problem-solving beyond static UI work.

---

## 🚀 Possible Future Enhancements

- 🏆 Scoring system & leaderboards
- 📱 Mobile & touch gesture support
- ⚙️ Difficulty presets
- ♿ Accessibility options

---

## 📄 License

This project is created for **educational and personal portfolio use**.
