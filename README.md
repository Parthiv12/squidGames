# 🦑 Squid Games Coding Challenge

## 🎥 Link to Video Presentation
[[Watch the Presentation Here](#)  
LINK](https://drive.google.com/file/d/1tTk6uIjIPe--WfAy-JvHJVH1nd4oZ_Af/view?usp=sharing)

---

## 📖 Project Information

### Title
**Squid Games Coding Challenge**

### Summary
The Squid Games Coding Challenge is an innovative project aimed at promoting computer science students to improve their coding skills through a Squid Games-themed experience. Players participate in coding challenges inspired by the popular series, facing unique mechanics such as "Red Light, Green Light" and more. The project provides an engaging platform to learn and practice coding while simulating a thrilling competition.

### Objectives and Approach
- **Objective**: To create an interactive coding game inspired by Squid Games that motivates computer science students to solve coding problems in a fun and competitive way.
- **Frontend**: Design engaging interfaces that incorporate coding problems into the Squid Games theme, providing clear feedback to players.
- **Backend**: Connect APIs to a database, ensuring real-time updates for player actions, submissions, and scoring.

---

## 👥 Contributors
- **Aaraiz**
- **Sugi**
- **Akshat**
- **Parthiv**

---

## 🛠️ Features and Game Structure

### Frontend
- **Red Light, Green Light Mechanics**:
  - **During the round**:
    - Players see the coding question and a submit button.
    - Timer counts down, depending on question difficulty:
      - Easy: 2 minutes
      - Medium: 3 minutes 30 seconds
      - Hard: 5 minutes
    - Visual indicators for "Red Light" (no code edits or submissions) and "Green Light" (players can write and submit code).
  - **After the round**:
    - Players who fail to submit on time are eliminated.
    - Players submitting incorrect solutions are eliminated.
    - Players submitting correct solutions earn points based on time remaining:
      - **Points Formula**: `Time remaining (in seconds) × 10`
- **Updated Game Format**:
  - Players solve 2 questions during a single round.
  - Player positions are displayed on a "field" with three positions:
    1. **Start Position**: Player begins at the far end of the field.
    2. **Middle Position**: Player progresses halfway across the field.
    3. **End Position**: Player reaches the goal at the other side of the field.
  - Dynamic "Red Light" and "Green Light" indicators:
    - During "Red Light," players cannot edit or submit code.
    - During "Green Light," players can write and submit code.

### Backend
- **Database Integration**: Link API results to the database for:
  - Tracking player submissions and results.
  - Storing player scores and progression.
  - Managing game states in real-time.
- **Game Mechanics**:
  - Eliminate players based on submission time or incorrect answers.
  - Move players forward upon correct submissions until they solve two questions.

---

## 🎮 Ideas for Gameplay

### Red Light, Green Light (Mechanics):
- **Throughout the round**:
  - Timer counts down based on question difficulty.
  - Players can only edit and submit code during "Green Light."
- **During "Green Light"**:
  - Textboxes are editable, and players can submit their code.
- **During "Red Light"**:
  - Players have a 1-second buffer to stop typing.
  - Textboxes become non-editable; submissions are disabled.
  - Violations during "Red Light" result in elimination.
- **After the round/submit**:
  - Players who fail to submit or submit incorrect answers are eliminated.
  - Players who submit correct answers progress closer to the goal.

---

## 🔗 How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository-url.git
