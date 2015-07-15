var wstream=
{
	wstream:function()
	{
		var stream=
		{
			id:{type:"standard"},
			data:[],
			read_pointer:0,
			eof:false,
			write:function(value)
			{
				this.data.push(value);
				this.read_pointer=this.data.length-1;
			},
			read:function()
			{
				var return_val=this.data[this.read_pointer];
				this.read_pointer--;
				if(this.read_pointer<=-2)
				{
					this.eof=true;
					return_val="";
				}
				return return_val;
			}
		};
		return stream;
	},
	wstrstream:function()
	{
		var stream=
		{
			id:{type:"standard"},
			data:[],
			read_pointer:0,
			eof:false,
			write:function(value)
			{
				this.data.push(value);
				this.read_pointer=this.data.length-1;
			},
			read:function()
			{
				var return_val=this.data[this.read_pointer];
				this.read_pointer--;
				if(this.read_pointer<=-2)
				{
					this.eof=true;
					return_val="";
				}
				return return_val;
			},
			str:function(string)
			{
				var i,word={start:0,end:0};
				string+=" ";
				for(i=0;i<string.length;i++)
				{   
					
					if(string[i]===" "||string[i]==="\n")
					{
						
						word.end=i;
						this.write(string.substring(word.start,word.end));
						while((string[i]===" "||string[i]==="\n")&&i<=string.length)
						{
							i++;
						}
						word.start=i;
					}
				}
				
			}
		};
		return stream;
	},
	convert_to_string_stream:function(stream)
	{
		stream.str=function(string)
		{
			var i,word={start:0,end:0};
			string+=" ";
			for(i=0;i<string.length;i++)
			{   
				
				if(string[i]===" "||string[i]==="\n")
				{
					
					word.end=i;
					this.write(string.substring(word.start,word.end));
					while((string[i]===" "||string[i]==="\n")&&i<=string.length)
					{
						i++;
					}
					word.start=i;
					
					
				}
			}
			
		};
		return stream;
	}
};
module.exports=wstream;