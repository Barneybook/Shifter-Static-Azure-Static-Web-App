'use strict';

(function ($) {

	var $wrap = $('.wrap');

	/**
  * Utility function to call a simple admin-ajax action.
  *
  * @param {string} action
  * @param {boolean} reload
  * @param {function} callback
  */
	function ajaxAction(action) {
		var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
		    _ref$reload = _ref.reload,
		    reload = _ref$reload === undefined ? true : _ref$reload,
		    _ref$callback = _ref.callback,
		    callback = _ref$callback === undefined ? null : _ref$callback;

		$.post(ajaxurl, {
			action: action,
			nonce: growmatik.nonce
		}, function (res) {
			if (res.success && reload) {
				document.location.reload();
			}
			if (callback) {
				callback(res);
			}
		});
	}

	/**
  * Integration success notice dismiss and continue buttons
  */
	var $notice = $('div.growmatik-notice-integration-success');
	$notice.on('click', 'button.notice-dismiss', function (event) {
		event.preventDefault();
		ajaxAction('growmatik_dismiss_integrated_notice', { reload: false });
		$notice.slideUp();
	});

	$notice.on('click', '#growmatik-go-to-dashboard-button', function (event) {
		event.preventDefault();
		var originalLink = $(this).attr('href');
		ajaxAction('growmatik_dismiss_integrated_notice', {
			reload: false,
			callback: function callback() {
				window.location = originalLink;
			}
		});
	});

	/**
  * Confirmation dialog creation utility function
  */
	var createDialog = function createDialog(selector, options) {
		options = $.extend({
			resizable: false,
			modal: true,
			autoOpen: false,
			draggable: false,
			dialogClass: 'growmatik-dialog-wrapper',
			width: 400
		}, options || {});

		options.create = function () {
			var instance = $(this);

			instance.siblings('.ui-dialog-titlebar').remove();

			instance.find('.growmatik-dialog-close').click(function (event) {
				event.preventDefault();
				instance.dialog('close');
			});

			$(document).on('click', '.ui-widget-overlay', function () {
				instance.dialog('close');
			});
		};

		var dialog = $(selector).dialog(options);
		dialog.data('uiDialog')._focusTabbable = $.noop;

		return dialog;
	};

	/**
  * Disconnect button
  */
	$('.growmatik-disconnect-confirm').click(function (event) {
		event.preventDefault();

		var disconnectConfirmDialog = createDialog('#growmatik-disconnect-dialog');
		disconnectConfirmDialog.dialog('open');
	});

	/**
  * Perform disconnect
  */
	$('#growmatik-disconnect-dialog').on('click', '.growmatik-remove-integration', function (e) {
		e.preventDefault();
		ajaxAction('growmatik_remove_integration');
	});

	/**
  * Erase Data button
  */
	$('.growmatik-destroy-data-confirm').click(function (event) {
		event.preventDefault();

		var eraseConfirmDialog = createDialog('#growmatik-destroy-data-dialog');
		eraseConfirmDialog.dialog('open');
	});

	/**
  * Perform erase data
  */
	$('#growmatik-destroy-data-dialog').on('click', '.growmatik-destroy-data', function (e) {
		e.preventDefault();
		ajaxAction('growmatik_destroy_data');
	});

	/**
  * Perform pause
  */
	$wrap.on('click', '.growmatik-pause-integration', function (event) {
		event.preventDefault();
		ajaxAction('growmatik_pause_integration');
	});

	/**
  * Perform resume
  */
	$wrap.on('click', '.growmatik-resume-integration', function (event) {
		event.preventDefault();
		ajaxAction('growmatik_resume_integration');
	});

	if ($('#wait-for-health-check-done').length) {
		var intervalId = void 0;

		var responseHandler = function responseHandler(response) {
			if (response.success && response.level) {
				clearInterval(intervalId);
				document.location.reload();
			}
		};

		intervalId = window.setInterval(function () {
			ajaxAction('growmatik_get_health_level', { reload: false, callback: responseHandler });
		}, 5000);
	}
})(jQuery);