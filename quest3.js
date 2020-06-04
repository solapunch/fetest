var relation = [["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]; 
solution(relation);

function solution(relation)
{
	var answer = 0;
	var count=0;
	var q;
	var w;
	for(q = 0; q < relation.length ; q++)
	{
		if(q!=relation.length-1)
		{
			for(w = q+1 ; w < relation.length; w++)
			{
				if((!relation[q][1] ===relation[w][1]) && (relation[q][3] === relation[w][3]))
				{
					count++;
				}
				else if(relation[q][1] === relation[w][1])
				{
					count--;
				}
			}	
		}
	}
	answer = count;
	return answer;
}