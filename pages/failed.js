import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

const failed = () => {
  return (
    <div className="min-h-[650px] flex items-center">
        <Wrapper>
            <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto fle:
            flex-col">
                <div className="text-2x1 font-bold">Payment failed!</div>
                <div className="text-base mt-5">
                    For any Product related query,drop an email to
                </div>
                <div className="underline">phamhuy721102@gmai.com</div>
                <Link href="/" className="font-bold mt-5">
                    Continue Shopping
                </Link>
            </div>
        </Wrapper>
    </div>
  );
};

export default failed;