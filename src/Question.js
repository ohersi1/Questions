import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [text, showText] = useState(false);
  return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button className="btn" onClick={() => showText(!text)}>
					{text ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{text && <p>{info}</p>}
		</article>
	);
};

export default Question;
