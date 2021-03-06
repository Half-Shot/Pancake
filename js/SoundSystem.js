function SoundManager()
{
	this.channels = $(".audiochannel").get();
}

SoundManager.prototype.QueueSound = function (filename)
{
	for (var i=0;i<this.channels.length;i++)
	{
		if(this.channels[i].ended || this.channels[i].src == undefined || this.channels[i].src == "")
		{
			this.channels[i].src = filename;
			return i;
		}
	}
}

SoundManager.prototype.PlaySound = function (channel,looped)
{
	this.channels[channel].loop = looped;
	this.channels[channel].play();
}

SoundManager.prototype.RemoveSound = function (channel)
{
	this.channels[channel].pause();
	this.channels[channel].src = "";
}
