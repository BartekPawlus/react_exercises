import { useRef } from "react";
import { firestore } from "../firebase";
import { collection, addDoc } from "@firebase/firestore";

export default function Contact() {
	const wordsRef = useRef();
	const ref = collection(firestore, "person");

	const handleSave = (e) => {
		e.preventDefault();
		console.log(wordsRef.current.value);

		let data = {
			person: wordsRef.current.value,
		};

		try {
			addDoc(ref, data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<form onSubmit={handleSave}>
				<label>Name:</label>
				<input type="text" ref={wordsRef} />

				<button type="submit">Save</button>
			</form>
		</div>
	);
}
