"use client";

import React, { useState } from "react";
import {
  Button,
  Dialog,
  CloseButton,
  Input,
  Select,
  createListCollection,
  SelectHiddenSelect,
  Portal,
  Flex,
  Text,
  Box,
  NumberInput,
  Badge,
} from "@chakra-ui/react";

const product = {
  id: 209,
  display_id: 8,
  owner: 1079,
  name: "New Product",
  category: "The god of War",
  characteristics: "New Product Characteristics",
  features: "Advanced durability, Enhanced speed",
  brand: "New Product Brand",
  sku: [
    {
      id: 248,
      selling_price: 54,
      max_retail_price: 44,
      amount: 33,
      unit: "kg",
      quantity_in_inventory: 0,
      product: 209,
    },
    {
      id: 247,
      selling_price: 32,
      max_retail_price: 32,
      amount: 33,
      unit: "kg",
      quantity_in_inventory: 0,
      product: 209,
    },
    {
      id: 246,
      selling_price: 23,
      max_retail_price: 21,
      amount: 22,
      unit: "kg",
      quantity_in_inventory: 1,
      product: 209,
    },
    {
      id: 245,
      selling_price: 40,
      max_retail_price: 38,
      amount: 30,
      unit: "kg",
      quantity_in_inventory: 10,
      product: 209,
    },
    {
      id: 244,
      selling_price: 65,
      max_retail_price: 60,
      amount: 50,
      unit: "kg",
      quantity_in_inventory: 5,
      product: 209,
    },
    {
      id: 243,
      selling_price: 75,
      max_retail_price: 70,
      amount: 25,
      unit: "kg",
      quantity_in_inventory: 2,
      product: 209,
    },
    {
      id: 242,
      selling_price: 120,
      max_retail_price: 115,
      amount: 20,
      unit: "kg",
      quantity_in_inventory: 15,
      product: 209,
    },
  ],
  updated_on: "2024-05-24T12:46:41.995873Z",
  adding_date: "2024-05-24T12:46:41.9958282",
};

const productVariants = createListCollection({
  items: product.sku.map((sku) => ({
    label: `Product ${sku.id}`,
    value: sku.id.toString(),
  })),
});

const SaleOrderDialog = ({ isCreateDialogOpen, setIsCreateDialogOpen }) => {
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  return (
    <Dialog.Root
      isOpen={isCreateDialogOpen}
      onOpenChange={setIsCreateDialogOpen}
      size="full"
      motionPreset="slide-in-bottom"
    >
      <Dialog.Trigger asChild>
        <Button bg="green.800">+ Sale Order</Button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Create New Sale Order</Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>

            <Dialog.Body>
              <Input placeholder="Customer Name" mb={3} />

              {/* Product Selection Dropdown */}
              <Select.Root
                multiple={false}
                value={selectedProduct}
                onChange={handleProductChange}
                size="sm"
                width="320px"
              >
                <SelectHiddenSelect />
                <Select.Label>Select Product Variant</Select.Label>
                <Select.Control>
                  <Select.Trigger>Select Product Variant</Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>

                <Portal>
                  <Select.Positioner style={{ zIndex: 9999 }}>
                    <Select.Content>
                      {productVariants.items.map((item) => (
                        <Select.Item key={item.value} item={item}>
                          {item.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>

              {/* Product SKU List */}
              <Box mt={6}>
                {product.sku.map((sku, index) => (
                  <Box
                    key={sku.id}
                    borderWidth="1px"
                    borderRadius="md"
                    p={4}
                    mb={5}
                  >
                    <Flex justify="space-between" mb={2}>
                      <Text fontWeight="medium">
                        {index + 1}. SKU {sku.id} ({sku.amount} {sku.unit})
                      </Text>
                      <Text fontWeight="medium">
                        Rate: ₹ {sku.selling_price}
                      </Text>
                    </Flex>

                    <Flex
                      justify="space-between"
                      borderTopWidth="1px"
                      pt={2}
                      fontSize="sm"
                    >
                      <Text fontWeight="semibold">Selling Rate</Text>
                      <Text fontWeight="semibold">Total Items</Text>
                    </Flex>

                    <Flex gap={3} mt={2}>
                      <Input placeholder="Enter selling rate" size="sm" />
                      <NumberInput.Root
                        min={0}
                        max={sku.quantity_in_inventory}
                        size="sm"
                        width="120px"
                      >
                        <NumberInput.Input placeholder="Qty" />
                        <NumberInput.Control>
                          <NumberInput.IncrementTrigger />
                          <NumberInput.DecrementTrigger />
                        </NumberInput.Control>
                      </NumberInput.Root>
                    </Flex>

                    <Flex justify="flex-end" mt={2}>
                      <Badge colorScheme="green">
                        {sku.quantity_in_inventory} Item(s) Remaining
                      </Badge>
                    </Flex>
                  </Box>
                ))}
              </Box>
            </Dialog.Body>

            <Dialog.Footer>
              <Button colorScheme="blue" mr={3}>
                Create Order
              </Button>
              <Button
                variant="ghost"
                onClick={() => setIsCreateDialogOpen(false)}
              >
                Cancel
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default SaleOrderDialog;
