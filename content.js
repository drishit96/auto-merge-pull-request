window.setInterval(function () {
  let mergeButton = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-merging.is-updating-via-merge > div > div > div > div > div.merge-message > div > div > button.btn-group-merge.rounded-left-2.btn.btn-primary.BtnGroup-item.js-details-target.hx_create-pr-button");
  let squashAndMergeButton = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-updating-via-merge.is-squashing > div > div > div > div > div.merge-message > div > div > button.btn-group-squash.rounded-left-1.btn.btn-primary.BtnGroup-item.js-details-target.hx_create-pr-button");
  let updateButton = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-merging > div > div > div > div:nth-child(3) > form > button");
  let confirmMergeButton = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-merging.is-updating-via-merge.open.Details--on > div > form > div > div.commit-form-actions > div > div.BtnGroup.btn-group-merge > button");
  let confirmSquashAndMerge = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-updating-via-merge.is-squashing > div > form > div > div.commit-form-actions > div > div.BtnGroup.btn-group-squash > button");

  let newUiMergeButton = document.querySelector("#discussion_bucket > div > div.Layout-main > div > div.discussion-timeline-actions > div.merge-pr.Details.is-merging > react-partial > div > div > div > div.border.rounded-2.borderColor-success-emphasis > div > div > div > div:nth-child(1) > button");
  let newUiMergeButtonColorless = document.querySelector("#discussion_bucket > div > div.Layout-main > div > div.discussion-timeline-actions > div.merge-pr.Details.is-merging > react-partial > div > div > div > div.border.rounded-2.borderColor-default > div > div > div > div:nth-child(1) > button");
  let newUiConfirmMergeButton = document.querySelector("#discussion_bucket > div > div.Layout-main > div > div.discussion-timeline-actions > div.merge-pr.Details.is-merging > react-partial > div > div > div > div.border.rounded-2.borderColor-default > div > div > div.d-flex.flex-items-start.flex-sm-items-center.flex-column.flex-sm-row.gap-2.mt-3 > div > button");

  if (mergeButton && !mergeButton.disabled) {
    mergeButton.click();
    if (confirmMergeButton && !confirmMergeButton.disabled) {
      confirmMergeButton.click();
      chrome.runtime.sendMessage({ triggerNotification: true });
    }
  } else if (newUiMergeButton && !newUiMergeButton.disabled) {
    newUiMergeButton.click();
  } else if (newUiMergeButtonColorless && !newUiMergeButtonColorless.disabled) {
    newUiMergeButtonColorless.click();
  } else if (newUiConfirmMergeButton && !newUiConfirmMergeButton.disabled) {
    newUiConfirmMergeButton.click();
    chrome.runtime.sendMessage({ triggerNotification: true });
  } else if (squashAndMergeButton && !squashAndMergeButton.disabled) {
    squashAndMergeButton.click();
    if (confirmSquashAndMerge && !confirmSquashAndMerge.disabled) {
      confirmSquashAndMerge.click();
      chrome.runtime.sendMessage({ triggerNotification: true });
    }
  } else if (updateButton && !updateButton.disabled) {
    updateButton.click();
  }
}, 5000);
