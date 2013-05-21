function Logger()
{
	this.console = $('#console');
}

Logger.prototype.toConsole = function(type,msg) {
	var logmsg = "<div class='" + type + "'>" + msg + "</div>";
	this.console.append(logmsg);
}
