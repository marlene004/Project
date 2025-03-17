import React, { useState } from "react";
import { Drawer, Menu, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

interface NavigationDrawerProps {
  schemas: any[];
  onSelect: (schemaIndex: number, categoryIndex: number) => void;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  schemas,
  onSelect
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
        style={{ marginBottom: "10px", borderRadius: "6px" }}
      >
        MENU
      </Button>

      <Drawer
        title="📌 Navigation"
        placement="left"
        onClose={() => setVisible(false)}
        open={visible}
        style={{ padding: 0 }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["0-0"]}
          onClick={({ key }) => {
            const [schemaIndex, categoryIndex] = key.split("-").map(Number);
            onSelect(schemaIndex, categoryIndex);
            setVisible(false);
          }}
          style={{ borderRight: "none" }}
        >
          {schemas.map((schemaSet, schemaIndex) => (
            <Menu.ItemGroup
              key={`group-${schemaIndex}`}
              title={`📄 Formulaire ${schemaIndex + 1}`}
            >
              {schemaSet.uiSchema.elements.map(
                (category: { label: string }, categoryIndex: number) => (
                  <Menu.Item
                    key={`${schemaIndex}-${categoryIndex}`}
                    style={{ fontWeight: "bold" }}
                  >
                    {category.label}
                  </Menu.Item>
                )
              )}
            </Menu.ItemGroup>
          ))}
        </Menu>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;
