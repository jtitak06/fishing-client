import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

export function Faq() {
    const questions = [
        {
            "id": 0,
            "question": "What is Cast Legend?",
            "answer": "Cast Legend is your ultimate digital destination for everything fishing. Purchase all your fishing needs from local stores with same-day delivery. Connect with fellow anglers, share photos of your best catches, and book chartered fishing trips effortlessly."
        },
        {
            "id": 1,
            "question": "How do I purchase items on Cast Legend?",
            "answer": "Search for items on the Buy Now page, where all inventory listed is available for purchase from your local bait and tackle shop. Simply add items to your cart and complete the checkout process. Items purchased on Cast Legend are available for immediate delivery or in-store pickup, or can be scheduled for a future time."
        },
        {
            "id": 2,
            "question": "What items are available for purchase on Cast Legend?",
            "answer": "You can expect to find everything you would normally find at your local bait and tackle shop, including bait, lures, rods, and reels."
        },
        {
            "id": 3,
            "question": "How can I use Cast Legend to find a fishin' buddy?",
            "answer": "Our interactive platform lets you connect with people in your area by responding to their posts or creating your own about upcoming fishing trips. Securely message others to coordinate all the necessary details."
        },
        {
            "id": 4,
            "question": "How do I show off my best catch from my fishing trip?",
            "answer": "After creating a profile on Cast Legend, click the Post button in the Catch of the Day section to share a picture of your catch along with important details. Engage with others by commenting and celebrating their great catches too!"
        },
        {
            "id": 5,
            "question": "How do I book a chartered fishing trip?",
            "answer": "Cast Legend makes scheduling a chartered fishing tour easy. Simply choose your preferred date on the calendar, enter your payment details, and you’re all set! Your tour guide will confirm your reservation, and you just need to show up and enjoy the day!"
        }
    ]

  return (
    <div className="flex flex-col w-full py-[48px] px-[32px] lg:flex-row">
        <div className="flex flex-col lg:pr-6">
      <h3 className="font-medium text-[#0085FF] text-[16px] leading-[24px] uppercase lg:text-[18px]">
        Frequently Asked Questions
      </h3>
      <h2 className="pt-[12px] text-[24px] leading-[32px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
        Let&apos;s Answer Your Questions
      </h2>
      <p className="py-[24px] text-[16px] leading-[24px] sm:max-w-[572px] lg:text-[18px] lg:leading-[28px]">
        Learn more about how Cast Legend adds value for businesses and consumers,
        and our mission to become the go-to digital source for all things
        fishing!
      </p>
      </div>
      <ul className="lg:w-2/3">
        {questions.map((item) => {
          return (
            <li key={item.id}>
              <Accordion type="single" collapsible>
                <AccordionItem value="question-item">
                  <AccordionTrigger className="text-left text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          );
        })}
      </ul>
    </div>
  );
}