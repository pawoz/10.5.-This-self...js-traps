//buttonCreateFunction
function Button(text) {
	this.text = text || 'Default text';
};

//prototype
Button.prototype = {
	create: function() {
		this.$element = $('<button>');
		this.$element.text(this.text);
		var self = this;
		this.$element.click(function() {
		//jeœli funkcja jest parametrem innej funkcji, nast¹pi utrata kontekstu, konieczne wprowadzenie zmiennej var self = this;
			alert(self.text);
		});
		$('body').append(this.$element);
		/*
		lub alternatywnie
		this.$element.appendTo($('body'));
		*/
	}
};
var btn1 = new Button();
btn1.create();