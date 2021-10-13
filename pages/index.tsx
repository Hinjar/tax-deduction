import { NextPage } from "next";
import { Button } from "../components/Button";
import { Dialog } from "../components/Dialog";
import { useState } from "react";
import { TaxDeductions } from "../components/TaxDeductions";

const Home: NextPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="container">
      <Button onClick={() => setDialogOpen(true)} outline>
        Налоговый вычет
      </Button>
      <Dialog open={dialogOpen} handleClose={() => setDialogOpen(false)}>
        <TaxDeductions onAddBtnClick={() => setDialogOpen(false)} />
      </Dialog>
    </div>
  );
};

export default Home;
