import {
  Box,
  Flex,
  Table,
  Tabs,
  Button,
  AvatarRoot,
  AvatarImage,
  Menu,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import avatar from "../components/avatar.png";
import SaleOrderDialog from "../components/SaleOrder";

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Dummy Data for Sale Orders
  const activeSaleOrders = [
    {
      id: 1,
      customerName: "SpiderMan",
      customerId: "spider123",
      price: "₹ 100",
      lastModified: "24/5/2024 (11:07 PM)",
    },
    {
      id: 2,
      customerName: "Thor",
      customerId: "thor123",
      price: "₹ 210",
      lastModified: "24/5/2024 (11:30 PM)",
    },
  ];

  const completedSaleOrders = [
    {
      id: 1,
      customerName: "IronMan",
      customerId: "ironman123",
      price: "₹ 500",
      lastModified: "23/5/2024 (10:00 PM)",
    },
    {
      id: 2,
      customerName: "Captain America",
      customerId: "cap123",
      price: "₹ 350",
      lastModified: "22/5/2024 (9:15 PM)",
    },
  ];

  return (
    <Box p={6}>
      {/* Tabs Section */}
      <Tabs.Root defaultValue="active">
        <Tabs.List rounded="l3" p="1">
          <Tabs.Trigger value="active">Active Sale Orders</Tabs.Trigger>
          <Tabs.Trigger value="completed">Completed Sale Orders</Tabs.Trigger>
        </Tabs.List>

        {/* Active Sale Orders Tab */}
        <Tabs.Content value="active">
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>ID</Table.ColumnHeader>
                <Table.ColumnHeader>Customer Name</Table.ColumnHeader>
                <Table.ColumnHeader>Price (₹)</Table.ColumnHeader>
                <Table.ColumnHeader>Last Modified</Table.ColumnHeader>
                <Table.ColumnHeader>Edit/View</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {activeSaleOrders.map((order) => (
                <Table.Row key={order.id}>
                  <Table.Cell>{order.id}</Table.Cell>
                  <Table.Cell>
                    <Flex alignItems="center" gap={2}>
                      <AvatarRoot size="sm" colorPalette="green">
                        <AvatarImage src={avatar} />
                      </AvatarRoot>
                      {order.customerName}
                    </Flex>
                  </Table.Cell>
                  <Table.Cell>{order.price}</Table.Cell>
                  <Table.Cell>{order.lastModified}</Table.Cell>
                  <Table.Cell>
                    <Menu.Root>
                      <Menu.Trigger>
                        <Button size="xs" variant="ghost">
                          ...
                        </Button>
                      </Menu.Trigger>
                      <Menu.Positioner>
                        <Menu.Content>
                          <Menu.Item
                            onSelect={() => console.log("View", order.id)}
                          >
                            View
                          </Menu.Item>
                          <Menu.Item
                            onSelect={() => console.log("Edit", order.id)}
                          >
                            Edit
                          </Menu.Item>
                          <Menu.Separator />
                          <Menu.Item
                            onSelect={() => console.log("Cancel", order.id)}
                            style={{ color: "red" }}
                          >
                            Cancel
                          </Menu.Item>
                        </Menu.Content>
                      </Menu.Positioner>
                    </Menu.Root>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Tabs.Content>

        {/* Completed Sale Orders Tab */}
        <Tabs.Content value="completed">
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>ID</Table.ColumnHeader>
                <Table.ColumnHeader>Customer Name</Table.ColumnHeader>
                <Table.ColumnHeader>Price (₹)</Table.ColumnHeader>
                <Table.ColumnHeader>Last Modified</Table.ColumnHeader>
                <Table.ColumnHeader>Edit/View</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {completedSaleOrders.map((order) => (
                <Table.Row key={order.id}>
                  <Table.Cell>{order.id}</Table.Cell>
                  <Table.Cell>
                    <Flex alignItems="center" gap={2}>
                      <AvatarRoot size="sm" colorPalette="green">
                        <AvatarImage src={avatar} />
                      </AvatarRoot>
                      {order.customerName}
                    </Flex>
                  </Table.Cell>
                  <Table.Cell>{order.price}</Table.Cell>
                  <Table.Cell>{order.lastModified}</Table.Cell>
                  <Table.Cell>
                    <Button size="sm" variant="plain">
                      ...
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Tabs.Content>
      </Tabs.Root>

      {/* Add-order and Logout Button */}
      <Flex justify="space-between" mt={4}>
        <Box>
          <SaleOrderDialog
            isCreateDialogOpen={isCreateModalOpen}
            setIsCreateDialogOpen={setIsCreateModalOpen}
          />
        </Box>

        <Box>
          <Button bg="red.400" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
