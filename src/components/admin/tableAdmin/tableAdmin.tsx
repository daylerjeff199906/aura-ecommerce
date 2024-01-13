"use client";
import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableCell,
  TableRow,
  getKeyValue,
  Button,
} from "@nextui-org/react";

import { IconEdit, IconTrash, IconEye } from "@tabler/icons-react";
import Link from "next/link";

interface IProps {
  url_base?: string;
  columns: {
    key: string;
    label: string;
  }[];
  rows: {
    key: string;
    [key: string]: string | React.ReactNode;
    showImage?: boolean;
  }[];
}

export const TableAdmin = ({ columns, rows, url_base }: IProps) => {
  return (
    <>
      <Table aria-label="Table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "actions" ? (
                    <div className="flex justify-center gap-2">
                      <Button isIconOnly size="sm" variant="light">
                        <IconEye />
                      </Button>
                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        color="success"
                        as={Link}
                        href={`/admin/${url_base}/edit?id=${item.key}`}
                      >
                        <IconEdit />
                      </Button>
                      <Button
                        className=""
                        isIconOnly
                        size="sm"
                        variant="light"
                        color="danger"
                      >
                        <IconTrash />
                      </Button>
                    </div>
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
