function myEach(array, funct){
  return funct(array);
};

function printArray(array)
{
	for (var i = 0; i < array.length; i++)
	{
		console.log(array[i])
	}
}

function mapNormalize(array)
{
	var max = 0;
	for (var i = 0; i < array.length; i++)
	{
		if (array[i] > max)
		{
			max = array[i]
		}
	}
	newArray = []
	for (var i = 0; i < array.length; i++)
	{
		newArray.push(array[i]/max)
	}
	return newArray
}