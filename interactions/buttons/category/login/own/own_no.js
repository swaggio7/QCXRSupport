
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const login_embeds = require('../login_embeds');
const buttons = require('../own/own_buttons');

module.exports = {
	id: "own_no",

	async execute(interaction, message) {
		await interaction.update({embeds: [login_embeds.own_no], components: []});
		return;
	},
};
