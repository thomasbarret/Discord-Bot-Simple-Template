# Discord Bot Simple Template

A clean and simple Discord bot template using [Oceanic.js](https://oceanic.ws/), designed to help you get started quickly. It features a modular structure, streamlined command and event handling, and customizable configurations.

---

## 🛠️ Features
- **Command Handling:** Easily organize and manage commands.
- **Event Handling:** Modular and scalable event management.
- **Environment Configuration:** Manage bot tokens and settings using `.env`.
- **Error Handling:** Catch uncaught exceptions for smoother debugging.

---

## 📁 File Structure
```
.
├── config.js             # Bot configuration file
├── main.js               # Main bot initialization
├── package-lock.json     # Lockfile for npm dependencies
├── package.json          # Project dependencies and metadata
└── src
    ├── commands          # Command files
    │   └── test
    │       └── test.js   # Example command
    ├── events            # Event files
    │   ├── handler
    │   │   └── commands.js  # Command handler
    │   └── starting
    │       └── ready.js     # Bot startup event
    └── functions          # Utility functions
        └── loader.js      # File loader utility
```

---

## 🔧 Configuration

1. **Set Up `.env`:**
   Create a `.env` file in the root directory with the following format:

   ```env
   TOKEN="YOUR_DISCORD_BOT_TOKEN"
   ```

   Replace `"YOUR_DISCORD_BOT_TOKEN"` with your bot's token from the [Discord Developer Portal](https://discord.com/developers/applications).

2. **Define Configurations in `config.js`:**
   Customize bot presence, token, and more.

---

## 🚀 Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/discord-bot-simple-template.git
   cd discord-bot-simple-template
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Bot:**
   ```bash
   npm start
   ```

---

## 📖 Example Command

Here's an example of how a command is structured in `src/commands/test/test.js`:

```javascript
module.exports.run = async (client, interaction, options) => {
    await interaction.createMessage({
        content: "This is a test command.",
    });
};

module.exports.property = {
    name: 'test',
    category: 'test',
    description: 'Is a test command.',
    type: 1,
    options: []
};
```

### Explanation:
- **`run` Function:** Handles the command's logic. Receives the bot client, interaction, and options as parameters.
- **`property` Object:** Defines metadata for the command:
  - `name`: Command name.
  - `category`: Category to group commands.
  - `description`: Short explanation of the command.
  - `type`: Command type (e.g., slash commands).
  - `options`: Optional parameters for the command.

---

## 📌 Notes
- Ensure that you have Node.js (v16+) installed for compatibility with Oceanic.js.
- Use the `.env` file to keep sensitive data (like tokens) secure.

---

## 🤝 Contributing
Feel free to fork this repository, submit pull requests, or suggest improvements in the issues section.