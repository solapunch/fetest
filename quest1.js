var input = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
solution(input);

function solution(input) {
	var data = [];
    var answer = [];
	var x=0;
	var hide=0;
	
	while(x < input.length)
	{
		if(input[x].startsWith("Enter"))
		{
			hide++;
			if(!data.length)
			{
				var qwe = [input[x].substring(input[x].lastIndexOf(' ')+1), input[x].substring(input[x].indexOf(' ')+1, input[x].lastIndexOf(' '))];
				data.push(qwe);
			}
			else
			{
				var count = 0; 		
				while (data.length > count)
				{
					if(data.length)
					{
						if(data[count].uid.equalsIgnoreCase(input[x].substring(input[x].indexOf(' ')+1, input[x].lastIndexOf(' '))))
						{
							data[count].name(input[x].substring(input[x].lastIndexOf(' ')+1));
						}
						else
						{
							var qwe = [input[x].substring(input[x].lastIndexOf(' ')+1), input[x].substring(input[x].indexOf(' ')+1, input[x].lastIndexOf(' '))];
							data.push(qwe);
						}
					}
				  count++;
				}
			}
		}
		else if(input[x].startsWith("Leave"))
		{
			hide++;
		}
		else if(input[x].startsWith("Change"))
		{
			var count = 0; 		
			while (data.length > count)
			{
				if(data.length)
				{
					if(data[count] === input[x].substring(input[x].indexOf(' ')+1, input[x].lastIndexOf(' ')))
					{
						data[count].name(input[x].substring(input[x].lastIndexOf(' ')+1));
					}
					else
					{
						var qwe = [input[x].substring(input[x].lastIndexOf(' ')+1), input[x].substring(input[x].indexOf(' ')+1, input[x].lastIndexOf(' '))];
						data.push(qwe);
					}
				}
				count++;
			}
		}
		count++;
		
		x=0;
        while(x < input.length)
        {
            if(input[x].startsWith("Enter"))
            {
                var y=0;
                while(y<data.length)
                {
                    if(data[y] === input[x].substring(input[x].indexOf(' ')+1, input[x].lastIndexOf(' ')))
                    {
						answer.push(data[y].name+" came in");
						y++;
					}
                }
            }
            else if(input[x].startsWith("Leave"))
            {
                var y=0;
                while(y<data.length)
                {
                    if(data[y] === input[x].substring(input[x].lastIndexOf(' ')+1))
					{
						answer.push(data[y].getName()+" has left");
						y++;
					}
                }
            }
            else
            {}
            x++;
        }
	}
	
    return answer;
}