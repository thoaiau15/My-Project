import React, {useState} from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
//import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers';


const App = () => {
  const [items, setItems] = useState([
	{itemName: "items 1", quality: 0, isSelected: false},
	{itemName: "items 2", quality: 0, isSelected: false},
	{itemName: "items 3", quality: 0, isSelected: false},

  ]);

  const [inputValue, setInputValue] = useState('');
  const [totalitemCount, settotalitemCount] = useState(0);

  const handleAddButtonClick = () => {
		const newItem = {
			itemName : inputValue,
			quality : 0,
			isSelected: false,
		}
		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
  }

  const handleQualityIncrease = (index) => {
	const newItems=[...items];
	newItems[index].quality++;
	setItems(newItems);
	calculateTotal();
  }

  const handleQualityDecrease = (index) => {
	const newItems=[...items];
	newItems[index].quality--;
	setItems(newItems);
	calculateTotal();
  }
  
  const toggleComplete = (index) => {
	const newItems = [...items];
	newItems[index].isSelected = !newItems[index].isSelected
	setItems(newItems);
  }

 
  const calculateTotal = () => {
		const totalitemCount = items.reduce((total, item)=>{
		return total + item.quality;
	}, 0);
	settotalitemCount(totalitemCount);
	
	
  }

 

 

  return (
    <div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputValue} 
					onChange={(event) => setInputValue(event.target.value)} 
					className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon icon={faPlus} onClick={handleAddButtonClick} />
				</div>
				<div className='item-list'>
					{items.map((item, index)=> <div className='item-container'>
						<div className='item-name' onClick={() => toggleComplete(index)}>
							{/* HINT: replace false with a boolean indicating the item has been completed or not */}
							{item.isSelected ? (
								<>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span className='completed'>{item.itemName}</span>
								</>
							) : (
								<>
									<FontAwesomeIcon icon={faCircle} />
									<span>{item.itemName}</span>
								</>
							)}
						</div>

						<div className='quantity'>
							<button>
								<FontAwesomeIcon icon={faChevronLeft} onClick={()=>handleQualityDecrease(index)}/>
							</button>
							<span> {item.quality} </span>
							<button>
								<FontAwesomeIcon icon={faChevronRight} onClick={()=>handleQualityIncrease(index)}/>
							</button>
						</div>
					</div>)}
					
				</div>
				<div className='total'>Total: {totalitemCount}</div>
			</div>
		</div>
  );
}

export default App;
