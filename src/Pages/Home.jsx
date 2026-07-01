import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Hero from "@/components/Hero";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slice";

const Home = ({ data }) => {
const navigate=useNavigate();
const cartItems = useSelector((state) => state.cart.items);
const dispatch = useDispatch();

  return (
    <div className="dark:text-white dark:bg-slate-900">
      <h1>Home Page</h1>
      <h1>{cartItems.length}</h1>
      {console.log(cartItems)
      }
      <button
      onClick={() =>
        dispatch(addToCart({
          id: 1,
          title: "iPhone",
        }))
      }
    >
      Add To Cart
    </button>
      <br />
      <Hero data={data} />
      <br />
      <Accordion
        type="single"
        collapsible
        defaultValue="shipping"
        className="max-w-lg"
      >
        <AccordionItem value="shipping">
          <AccordionTrigger>What is this?</AccordionTrigger>
          <AccordionContent>
            it is an Accordion component use for making an Accordion.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            Returns accepted within 30 days. Items must be unused and in
            original packaging. Refunds processed within 5-7 business days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>
            How can I contact customer support?
          </AccordionTrigger>
          <AccordionContent>
            Reach us via email, live chat, or phone. We respond within 24 hours
            during business days.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Home;
