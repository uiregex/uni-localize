import { Fragment, h, VNode } from '@stencil/core';

import { UniLangRepeatTemplate } from './lang-repeat.template';

export const UniLangListTemplate = function(data, storeData): VNode {
  const { value, selectedIndex, activePath, translatePath, indexMode, isShadow } = data;
  const { top, shadow, frame, type, feature, separator } = storeData;

  return (
    <Fragment>
      <uni-lang-default
        value={value}
        selectedIndex={selectedIndex}
        indexMode={indexMode}
        isShadow={isShadow}
        top={top}
        shadow={shadow}
        frame={frame}
        type={type}
        feature={feature}
        activePath={activePath}
      />

      {UniLangRepeatTemplate(data, storeData)}

      <uni-translate-load
        top={top}
        shadow={shadow}
        frame={frame}
        type={type}
        feature={feature}
        separator={separator}
        activePath={activePath}
        translatePath={translatePath}
      />
    </Fragment>
  ) as VNode;
};
