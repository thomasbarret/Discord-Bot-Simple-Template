module.exports.run = async (client, interaction, options) => {
    
    await interaction.createMessage({
        content: "This is a test command.",
    })
    
};

module.exports.property = {
    name: 'test',
    category: 'test',
    description: 'Is a test command.',
    type: 1,
    options: []
}