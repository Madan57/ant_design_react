import React from 'react';
import groupBy from 'lodash/groupBy';
import sumBy from 'lodash/sumBy';

const GroupBy = () => {
  var data = [
    {
      name: 'jim',
      color: 'blue',
      amount: 22,
    },
    {
      name: 'Sam',
      color: 'blue',
      amount: 33,
    },
    {
      name: 'eddie',
      color: 'green',
      amount: 77,
    },
    {
      name: 'mike',
      color: 'green',
      amount: 11,
    },
  ];
  let result = groupBy(data, 'color');
  console.log(result);

  const myData = [];
  Object.keys(result).map((item, index) => {
    const contact = result[item];

    myData.push({
      color: item,
      amount: sumBy(result[item], 'amount'),
      data: contact,
    });
    return item;
  });

  console.log('my result', result);
  console.log('my data', myData);
  return (
    <>
      <h2>Group by demo</h2>
    </>
  );
};

export default GroupBy;
