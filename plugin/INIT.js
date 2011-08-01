// for browsing speed tuneup
options.setPref('network.http.pipelining', true);
options.setPref('network.http.pipelining.firstrequest', true);
options.setPref('network.http.pipelining.maxrequests', 8);
options.setPref('network.http.max-connections', 32);
options.setPref('network.http.max-connections-per-server', 24);
options.setPref('network.http.max-persistent-connections-per-proxy', 16);
options.setPref('network.http.max-persistent-connections-per-server', 8);
options.setPref('nglayout.initialpaint.delay', 500);
options.setPref('plugin.expose_full_path', true);
options.setPref('ui.submenuDelay', 0);
options.setPref('content.interrupt.parsing', true);
options.setPref('content.max.tokenizing.time', 2250000);
options.setPref('content.notify.backoffcount', 5);
options.setPref('content.notify.interval', 750000);
options.setPref('content.notify.ontimer', true);
options.setPref('content.switch.threshold', 750000);
options.setPref('content.maxtextrun', 8191);

options.setPref('browser.cache.memory.capacity', 65536);
options.setPref('browser.cache.disk_cache_ssl', false);
//options.setPref('browser.cache.disk_cache_ssl', true);
//options.setPref('browser.cache.disk.enable', false);
options.setPref('browser.tabs.closeButtons', 2);
options.setPref('browser.tabs.autoHide', false);
options.setPref('browser.tabs.tabMaxWidth', 120);
options.setPref('browser.tabs.warnOnClose', false);
options.setPref('browser.display.show_image_placeholders', false);
options.setPref('browser.download.manager.showAlertOnComplete', false);
options.setPref('browser.download.manager.retention', 0);
options.setPref('browser.download.manager.showWhenStarting', false);
options.setPref('browser.download.manager.useWindow', false);
options.setPref('browser.enable_automatic_image_resizing', false);
options.setPref('browser.xul.error_pages.enabled', true);
options.setPref('config.trim_on_minimize', true);
options.setPref('network.dns.disableIPv6', true);
options.setPref('dom.popup_maximum',200);
options.setPref('extensions.getAddons.showPane',true);
options.setPref('plugin.expose_full_path', true);
options.setPref('signed.applets.codebase_principal_support', true);

options.setPref('layout.frames.force_resizability', true);
options.setPref('view_source.wrap_long_lines', true);
options.setPref('nglayout.events.dipatchLeftClickOnly', true);
options.setPref('browser.blink_allowed', false);
options.setPref('dom.disable_window_open_feature.location', true);
options.setPref('dom.disable_window_open_feature.scrollbars',true);

// disable accesskey
options.setPref('ui.key.generalAccessKey', 0);