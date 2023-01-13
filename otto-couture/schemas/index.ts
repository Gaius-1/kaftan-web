// We import object and document schemas
import { createSchema } from "sanity";
import schemaTypes from "sanity";

import blockContent from "./blockContent";
import category from "./category";
import product from "./product";

// export const schemaTypes = [product, category, blockContent];

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
      // The following are document types which will appear
      // in the studio.
      product,
      category,
      // When added to this list, object types can be used as
      // { type: 'typename' } in other document schemas
      blockContent,
    //   localeText,
    //   localeBlockContent,
    //   localeString,
    //   user,
    //   account,
    ]),
  });