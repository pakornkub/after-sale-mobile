import ReceivePart from "../views/ReceivePart";
import ReceiveReturn from "../views/ReceiveReturn";
import JobRepack from "../views/JobRepack";
import JobRecheck from "../views/JobRecheck";
import ShipToWH from "../views/ShipToWH";
import WHReceive from "../views/WHReceive";
import ReturnPart from "../views/ReturnPart";
import CheckPart from "../views/CheckPart";
import CountStock from "../views/CountStock";

export const DynamicMenu: any = {
  ReceivePartMobile: ReceivePart,
  ReceiveReturnMobile: ReceiveReturn,
  JobRepackMobile: JobRepack,
  JobRecheckMobile: JobRecheck,
  ShipToWHMobile: ShipToWH,
  WHReceiveMobile: WHReceive,
  ReturnPartMobile: ReturnPart,
  CheckPartMobile: CheckPart,
  CountStockMobile: CountStock,
};

// Note : set menu name to dynamic menu
