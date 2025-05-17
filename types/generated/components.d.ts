import type { Schema, Struct } from '@strapi/strapi';

export interface DiscoverUiDiscoverItem extends Struct.ComponentSchema {
  collectionName: 'components_discover_ui_discover_items';
  info: {
    displayName: 'DiscoverItem';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderUiCategoriesHome extends Struct.ComponentSchema {
  collectionName: 'components_header_ui_categories_homes';
  info: {
    displayName: 'CategoriesHome';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
  };
}

export interface HeaderUiSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_header_ui_section_items';
  info: {
    displayName: 'sectionItem';
    icon: 'alien';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductUiAditionalProduct extends Struct.ComponentSchema {
  collectionName: 'components_product_ui_aditional_products';
  info: {
    displayName: 'AditionalProduct';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductUiCharacteristicsProduct
  extends Struct.ComponentSchema {
  collectionName: 'components_product_ui_characteristics_products';
  info: {
    displayName: 'characteristicsProduct';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'discover-ui.discover-item': DiscoverUiDiscoverItem;
      'header-ui.categories-home': HeaderUiCategoriesHome;
      'header-ui.section-item': HeaderUiSectionItem;
      'product-ui.aditional-product': ProductUiAditionalProduct;
      'product-ui.characteristics-product': ProductUiCharacteristicsProduct;
    }
  }
}
