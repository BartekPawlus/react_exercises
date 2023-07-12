import Grid from "@mui/material/Grid";
import HomeCard from "./HomeComponent/HomeCard";
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export default function Home() {
	return (
		<>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid
					item
					xs={12}
					style={{
						marginTop: "20px",
						marginBottom: "20px",
						textAlign: "center",
					}}
				>
					HOME
				</Grid>
				<Grid item xs={3}>
        <HomeCard icon={<AddAlertIcon />} title="JÓZEK" text="tekścik"/>
				</Grid>
				<Grid item xs={3}>
        <HomeCard icon={<AddHomeWorkIcon />} title="JANEK" text="tekścik"/>
        </Grid>
				<Grid item xs={3}>
        <HomeCard icon={<AddAPhotoIcon />} title="KAZIU" text="tekścik"/>
        </Grid>
				<Grid item xs={3}>
        <HomeCard title="MIETEK" text="tekścik"/>
        </Grid>
				<Grid item xs={3}>
        <HomeCard title="JANUSZ" text="tekścik"/>
        </Grid>
				<Grid item xs={3}>
        <HomeCard title="ANDRZEJ" text="tekścik"/>
        </Grid>
				<Grid item xs={3}>
        <HomeCard title="CZESIEK" text="tekścik"/>
        </Grid>
				<Grid item xs={3}>
        <HomeCard title="BOGDAN" text="tekścik"/>
        </Grid>
			</Grid>
		</>
	);
}
