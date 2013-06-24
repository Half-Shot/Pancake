function Logger()
{
	this.console = $('#console');
	this.console.empty();
}

Logger.prototype.toConsole = function(type,msg) {
	var logmsg = "<div class='" + type + "'>" + msg + "</div>";
	this.console.append(logmsg);
	if(this.console.outerHeight() > $(document).height() - 10){
		this.console.find('div').first().remove();
	};
}
