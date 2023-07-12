import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function HomeCard(props) {
	const { icon, title, text } = props;
	return (
		<Card
			sx={{ maxWidth: 345 }}
			style={{
				textAlign: "center",
			}}
		>
			<CardContent>
				<Typography gutterBottom component="div">
					{icon}
				</Typography>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{text}
				</Typography>
			</CardContent>
		</Card>
	);
}
