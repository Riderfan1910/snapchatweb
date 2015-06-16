'use strict';

module.exports = {
	app: {
		title: 'SnapWeb',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
                'public/lib/css/font-awesome.min.css',
                /*
                'public/lib/css/icon-moon.css',
                'public/lib/css/animate.css',
                'public/lib/css/theme-styles.css',
                'public/lib/css/color-default.css',
                */
                'http://shreykumar.com/css/stylish-portfolio.css',
                'public/lib/css/custom.css'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/js/modernizr.custom.js',
                'public/lib/js/jquery-1.11.2.min.js',
                'public/lib/js/jquery.bxslider.min.js',
                'public/lib/js/jquery.easing.1.3.js',
                'public/lib/js/jquery.fitvids.js',
                'public/lib/js/jquery.placeholder.js',
                'public/lib/js/jquery.touchSwipe.js',
                'public/lib/js/jquery.validate.min.js',
                'public/lib/js/bootstrap.min.js',
                'public/lib/js/chart.js',
                'public/lib/js/color-switcher.js',
                'public/lib/js/gallery.js',
                'public/lib/js/icheck.min.js',
                'public/lib/js/mailer.js',
                'public/lib/js/smoothscroll.js',
                'public/lib/js/waypoints.min.js',
                'public/lib/js/landing2.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};