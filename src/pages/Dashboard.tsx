import Page from "../components/Page";
import { Container, Grid, Typography } from '@mui/material';

export default function Dashboard() {

    return (
        <Page>
            <Container maxWidth='xl'>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Dashbaord
                </Typography>
                <Grid>

                </Grid>
            </Container>
        </Page>
    )
}