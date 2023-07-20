import { Grid, GridItem, Show } from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav " "main"`,
        lg: `"nav nav" "side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="side">
          <SideBar />
        </GridItem>
      </Show>
      <GridItem pt="20" area="main">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error commodi
        delectus vel totam? Reprehenderit, ad, aliquam asperiores incidunt
        mollitia maxime, eaque obcaecati temporibus adipisci doloribus sed rerum
        quam in at? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Error commodi delectus vel totam? Reprehenderit, ad, aliquam asperiores
        incidunt mollitia maxime, eaque obcaecati temporibus adipisci doloribus
        sed rerum quam in at? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Error commodi delectus vel totam? Reprehenderit, ad,
        aliquam asperiores incidunt mollitia maxime, eaque obcaecati temporibus
        adipisci doloribus sed rerum quam in at? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Error commodi delectus vel totam?
        Reprehenderit, ad, aliquam asperiores incidunt mollitia maxime, eaque
        obcaecati temporibus adipisci doloribus sed rerum quam in at? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Error commodi
        delectus vel totam? Reprehenderit, ad, aliquam asperiores incidunt
        mollitia maxime, eaque obcaecati temporibus adipisci doloribus sed rerum
        quam in at? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Error commodi delectus vel totam? Reprehenderit, ad, aliquam asperiores
        incidunt mollitia maxime, eaque obcaecati temporibus adipisci doloribus
        sed rerum quam in at? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Error commodi delectus vel totam? Reprehenderit, ad,
        aliquam asperiores incidunt mollitia maxime, eaque obcaecati temporibus
        adipisci doloribus sed rerum quam in at? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Error commodi delectus vel totam?
        Reprehenderit, ad, aliquam asperiores incidunt mollitia maxime, eaque
        obcaecati temporibus adipisci doloribus sed rerum quam in at? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Error commodi
        delectus vel totam? Reprehenderit, ad, aliquam asperiores incidunt
        mollitia maxime, eaque obcaecati temporibus adipisci doloribus sed rerum
        quam in at? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Error commodi delectus vel totam? Reprehenderit, ad, aliquam asperiores
        incidunt mollitia maxime, eaque obcaecati temporibus adipisci doloribus
        sed rerum quam in at? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Error commodi delectus vel totam? Reprehenderit, ad,
        aliquam asperiores incidunt mollitia maxime, eaque obcaecati temporibus
        adipisci doloribus sed rerum quam in at? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Error commodi delectus vel totam?
        Reprehenderit, ad, aliquam asperiores incidunt mollitia maxime, eaque
        obcaecati temporibus adipisci doloribus sed rerum quam in at? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Error commodi
        delectus vel totam? Reprehenderit, ad, aliquam asperiores incidunt
        mollitia maxime, eaque obcaecati temporibus adipisci doloribus sed rerum
        quam in at? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Error commodi delectus vel totam? Reprehenderit, ad, aliquam asperiores
        incidunt mollitia maxime, eaque obcaecati temporibus adipisci doloribus
        sed rerum quam in at? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Error commodi delectus vel totam? Reprehenderit, ad,
        aliquam asperiores incidunt mollitia maxime, eaque obcaecati temporibus
        adipisci doloribus sed rerum quam in at? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Error commodi delectus vel totam?
        Reprehenderit, ad, aliquam asperiores incidunt mollitia maxime, eaque
        obcaecati temporibus adipisci doloribus sed rerum quam in at? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Error commodi
        delectus vel totam? Reprehenderit, ad, aliquam asperiores incidunt
        mollitia maxime, eaque obcaecati temporibus adipisci doloribus sed rerum
        quam in at? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Error commodi delectus vel totam? Reprehenderit, ad, aliquam asperiores
        incidunt mollitia maxime, eaque obcaecati temporibus adipisci doloribus
        sed rerum quam in at? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Error commodi delectus vel totam? Reprehenderit, ad,
        aliquam asperiores incidunt mollitia maxime, eaque obcaecati temporibus
        adipisci doloribus sed rerum quam in at? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Error commodi delectus vel totam?
        Reprehenderit, ad, aliquam asperiores incidunt mollitia maxime, eaque
        obcaecati temporibus adipisci doloribus sed rerum quam in at? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Error commodi
        delectus vel totam? Reprehenderit, ad, aliquam asperiores incidunt
        mollitia maxime, eaque obcaecati temporibus adipisci doloribus sed rerum
        quam in at? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Error commodi delectus vel totam? Reprehenderit, ad, aliquam asperiores
        incidunt mollitia maxime, eaque obcaecati temporibus adipisci doloribus
        sed rerum quam in at? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Error commodi delectus vel totam? Reprehenderit, ad,
        aliquam asperiores incidunt mollitia maxime, eaque obcaecati temporibus
        adipisci doloribus sed rerum quam in at? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Error commodi delectus vel totam?
        Reprehenderit, ad, aliquam asperiores incidunt mollitia maxime, eaque
        obcaecati temporibus adipisci doloribus sed rerum quam in at? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Error commodi
        delectus vel totam? Reprehenderit, ad, aliquam asperiores incidunt
        mollitia maxime, eaque obcaecati temporibus adipisci doloribus sed rerum
        quam in at? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Error commodi delectus vel totam? Reprehenderit, ad, aliquam asperiores
        incidunt mollitia maxime, eaque obcaecati temporibus adipisci doloribus
        sed rerum quam in at? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Error commodi delectus vel totam? Reprehenderit, ad,
        aliquam asperiores incidunt mollitia maxime, eaque obcaecati temporibus
        adipisci doloribus sed rerum quam in at? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Error commodi delectus vel totam?
        Reprehenderit, ad, aliquam asperiores incidunt mollitia maxime, eaque
        obcaecati temporibus adipisci doloribus sed rerum quam in at? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Error commodi
        delectus vel totam? Reprehenderit, ad, aliquam asperiores incidunt
        mollitia maxime, eaque obcaecati temporibus adipisci doloribus sed rerum
        quam in at? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Error commodi delectus vel totam? Reprehenderit, ad, aliquam asperiores
        incidunt mollitia maxime, eaque obcaecati temporibus adipisci doloribus
        sed rerum quam in at? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Error commodi delectus vel totam? Reprehenderit, ad,
        aliquam asperiores incidunt mollitia maxime, eaque obcaecati temporibus
        adipisci doloribus sed rerum quam in at? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Error commodi delectus vel totam?
        Reprehenderit, ad, aliquam asperiores incidunt mollitia maxime, eaque
        obcaecati temporibus adipisci doloribus sed rerum quam in at? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Error commodi
        delectus vel totam? Reprehenderit, ad, aliquam asperiores incidunt
        mollitia maxime, eaque obcaecati temporibus adipisci doloribus sed rerum
        quam in at? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Error commodi delectus vel totam? Reprehenderit, ad, aliquam asperiores
        incidunt mollitia maxime, eaque obcaecati temporibus adipisci doloribus
        sed rerum quam in at?
      </GridItem>
    </Grid>
  );
}

export default App;
