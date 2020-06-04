var N = 4;
var users = [4, 4, 4, 4, 4];
solution(N, users);

function solution(n, users)
{
	var answer = [];
	var stage = [];
	
	var q;
	var w;
	for(q = 0 ; q < n ; q++)
	{
		var count=0;
		var pass = users.length;
		for(w = 0 ; w < users.length ; w++)
		{
			if(q+1 == users[w])
			{
				count++;
			}
		}
		stage.push([q+1, count/pass]);
		pass = pass-count;
	}
	
	stage.sort(sortFunction);
	function sortFunction(a, b)
	{
		if (a[1] === b[1]) {
			return 0;
		}
		else {
			return (a[1] < b[1]) ? -1 : 1;
		}
	}
	
	for(q = 0 ; q < n ; q++)
	{
		answer.push(stage[q][0]);
	}
	
	return answer;
}