import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import Logo from '@/public/logo.png'

export function AuthModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Try for Free</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[360px]">
                <DialogHeader>
                    <Image src={Logo} alt="Logo" className="size-10"/>
                    <h4 className="text-3xl font-semibold">
                        Cal<span className="text-primary">Zura</span>
                    </h4>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}