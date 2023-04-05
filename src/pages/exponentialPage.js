import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInitAction, addSumAction, clearAllAction } from "../redux/actions";

const ExponentialPage = () => {

    const [inputNum, setInputNum] = useState('')

    const dispatch = useDispatch()
    const { nums } = useSelector(state => state.exponentialReducer)
    
    const handleAddNums = () => {
        if (nums.length === 0) {
            dispatch(addInitAction(Number(inputNum)))
            setInputNum('')
        } else {
            const obj = {
                inputNum: Number(inputNum),
                lastNum: Number(nums.slice(-1))
            }
            dispatch(addSumAction(obj))
            setInputNum('')
        }
    }

    const handleClearAll = () => {
        dispatch(clearAllAction())
    }

    return (
        <div className="wrapper">
            <input
              value={inputNum}
              onChange={(e) => setInputNum(e.target.value)}
              type="number"
              placeholder="enter number"
            />
            <div className="wrapper__controls">
                <button className="add" onClick={handleAddNums}>Add</button>
                <button className="clear" onClick={handleClearAll}>Clear</button>
            </div>
            <div className="wrapper__output">
                {
                    nums.length === 0
                    ? <p>no inputs</p>
                    : nums.map((num, i) => <p key={i}>{num}</p> )
                }
            </div>
        </div>
    )
};

export default ExponentialPage;