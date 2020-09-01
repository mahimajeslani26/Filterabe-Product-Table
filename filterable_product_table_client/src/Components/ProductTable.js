import React from 'react';
import CategoryRow from './CategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {
  const data = props.table_data;
  const showStocked = props.showStocked;
  const searchInput = props.searchInput;

  // categorize the table data based on the category.
  const category_groups = data.reduce((acc, curr) => {
    acc[curr.category] = [...(acc[curr.category] || []), curr];
    return acc;
  }, {});

  const TableDataElement = [];
  for (const cat in category_groups) {
    TableDataElement.push(<CategoryRow key={cat} name={cat} />);
    TableDataElement.push(
      category_groups[cat]
        .filter((prod) => {
          return (
            !(showStocked && !prod.stocked) && prod.name.includes(searchInput)
          );
        })
        .map((prod, i) => {
          return (
            <ProductRow
              key={cat.concat(i)}
              name={prod.name}
              price={prod.price}
            />
          );
        })
    );
    //remove the category row in case there are no product rows returned.
    if (TableDataElement[TableDataElement.length - 1].length === 0) {
      TableDataElement.pop();
      TableDataElement.pop();
    }
  }

  return (
    <div className='ProductTable'>
      <div className='Header'>
        <span>Name</span> <span>Price</span>
      </div>
      {TableDataElement}
    </div>
  );
}

export default ProductTable;
