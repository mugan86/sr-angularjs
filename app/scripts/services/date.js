'use strict';

function getTodayData (date) 
{
 	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	console.log('Test with number: ' + getDayWithTwoCharacters(month));

	return year+ '-' + getDayWithTwoCharacters(month) + '-' + getDayWithTwoCharacters(day);
}

function getFutureData (days)
{
	var currentDate = new Date();
	currentDate.setTime( currentDate.getTime() + days * 86400000 );
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	console.log('Test with number: ' + getDayWithTwoCharacters(month));

	return year+ '-' + getDayWithTwoCharacters(month) + '-' + getDayWithTwoCharacters(day);
}

function getDayWithTwoCharacters(value)
{
	if (value < 10)
	{
		return '0' + value;
	}
	return value;
}

function renderData(date)
{

}


