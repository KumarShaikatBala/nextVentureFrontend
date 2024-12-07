import { Button } from "@mui/material";

const OthersInformation = () => {
  return (
    // <>this is tabs</>
    <div className="container mx-auto">
      <div className=" bg-[#f3f9fb] w-full  border rounded-md shadow-sm p-3 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iste
          esse commodi doloribus ea qui ratione molestias asperiores eaque,
          doloremque repellat, modi inventore? Quod nesciunt autem quas libero
          excepturi debitis a perferendis, ex harum adipisci obcaecati
          cupiditate iure eum suscipit rerum beatae modi reprehenderit odit
          culpa quam voluptates tempore commodi!
        </p>
      </div>

      <div className="mt-6 flex justify-end ">
        <Button
          variant="contained"
          color="primary"
          className="mt-6  bg-blue-500"
        >
          আপডেট
        </Button>
      </div>
    </div>
  );
};

export default OthersInformation;
