import { Button } from "./ui/button";

export function SignUpBox() {
    return (
      <div className="py-[56px] px-[32px] flex justify-center">
        <div className="w-full max-w-[1280px] rounded-[16px] bg-[linear-gradient(0deg,_rgba(109,144,219,1)_10%,_rgba(52,110,235,1)_90%)] text-center lg:my-[60px] lg:px-[120px] lg:py-[89px]">
          <h3 className="text-[#FFFFFF] text-[32px] font-medium pt-8 lg:text-[56px] lg:pt-0">
            Sign Up Today
          </h3>
          <p className="text-[#FFFFFF] text-[16px] leading:[24px] lg:text-[24px] lg:leading-[32px] pt-4 px-8 lg:pt-10">
            Cast Legend is your go-to destination for the latest fishing gear,
            booking charters, and connecting with fellow anglers who share your
            passion. Join us today!
          </p>
          <div className="mt-[40px] pb-[40px] lg:mt-[60px] lg:pb-0">
            <Button className="text-[16px] leading-[24px] text-[#346eeb] bg-[#FFFFFF] border-[1px] border-[#346eeb] py-[16px] px-[32px] lg:text-[24px] lg:leading-[32px] lg:py-[32px] lg:px-[64px]">Sign Up</Button>
          </div>
        </div>
      </div>
    );
}