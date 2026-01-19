import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_texts';
  info: {
    displayName: 'rich-text';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface DemoSharedCta extends Struct.ComponentSchema {
  collectionName: 'components_demo_shared_ctas';
  info: {
    displayName: 'shared.cta';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface TestComponentTestComponent extends Struct.ComponentSchema {
  collectionName: 'components_test_component_test_components';
  info: {
    displayName: 'testComponent';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.rich-text': BlocksRichText;
      'demo.shared-cta': DemoSharedCta;
      'test-component.test-component': TestComponentTestComponent;
    }
  }
}
