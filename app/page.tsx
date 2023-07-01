import REgisterUser from "@/components/REgisterUser";
import Tbaleava from "@/components/Tbaleava";
import { Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption, } from "@/components/ui/table";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen ">
      <h1>General Zod</h1>
      <div className="h-full">
        <div className="text-black bg-white">
          <Tbaleava />
        </div>
        <div>
          <REgisterUser />
        </div>
        <div className="flex bg-white ">
          <Table className="flex flex-col ">
            <TableHead className="p-4 bg-red-400 ">
              <TableRow className="p-5 bg-gray-600">
                <TableCell>
                  <Image src="/images.png" width={50} height={50} alt={""} />
                </TableCell>
                <TableCell>
                  <Image src="/images.png" width={50} height={50} alt={""} />
                </TableCell>
                <TableCell>
                  <Image src="/images.png" width={50} height={50} alt={""} />
                </TableCell>
                <TableCell>
                  <Image src="/images.png" width={50} height={50} alt={""} />
                </TableCell>
                <TableCell>
                  <Image src="/images.png" width={50} height={50} alt={""} />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Image src="/images.png" width={50} height={50} alt={""} />
                </TableCell>
                <TableCell>
                  <Image src="/images.png" width={50} height={50} alt={""} />
                </TableCell>
                <TableCell>
                  <Image src="/images.png" width={50} height={50} alt={""} />
                </TableCell>
                <TableCell>
                  <Image src="/images.png" width={50} height={50} alt={""} />
                </TableCell>
                <TableCell>
                  <Image src="/images.png" width={50} height={50} alt={""} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
