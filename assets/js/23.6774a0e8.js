(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{377:function(t,e,s){"use strict";s.r(e);var a=s(12),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("The default table prefix used for WordPress is "),s("code",[t._v("wp_")]),t._v(", and I've noticed a few WordPress developers mention that it is more secure to use a random table prefix for your WordPress installation.  It's easy to set the table prefix variable in your wp-config.php file when you are installing your WordPress site, but what if you would like to make that change post-installation.  Here's a few steps you can make to update the WordPress table prefix.  It's helpful to have some knowledge of MySQL before beginning these steps.")]),t._v(" "),s("h2",{attrs:{id:"first-step-update-the-table-prefix-variable-in-wp-config-php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-step-update-the-table-prefix-variable-in-wp-config-php"}},[t._v("#")]),t._v(" First Step: Update the table prefix variable in wp-config.php")]),t._v(" "),s("p",[t._v("This step is pretty simple and straight forward.  Just open up the wp-config.php file and change the "),s("code",[t._v("$table_prefix")]),t._v(" variable from "),s("code",[t._v("wp_")]),t._v(" to "),s("code",[t._v("new_prefix_")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * WordPress Database Table prefix.\n *\n * You can have multiple installations in one database if you give each a unique\n * prefix. Only numbers, letters, and underscores please!\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table_prefix")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'new_prefix_'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"running-the-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-the-queries"}},[t._v("#")]),t._v(" Running the queries")]),t._v(" "),s("p",[t._v("In my situation I'm using "),s("a",{attrs:{href:"http://www.sequelpro.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sequel Pro"),s("OutboundLink")],1),t._v(" on my local machine to run the MySQL statements but you can also use "),s("a",{attrs:{href:"http://www.phpmyadmin.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpMyAdmin"),s("OutboundLink")],1),t._v(" or even just the good old command line.  I would recommend testing these statements locally before running on a production server.")]),t._v(" "),s("h2",{attrs:{id:"renaming-the-tables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#renaming-the-tables"}},[t._v("#")]),t._v(" Renaming the tables")]),t._v(" "),s("p",[t._v("The first set of statements that need to be run basically update the main table names to the new prefix and can use the "),s("code",[t._v("RENAME TABLE")]),t._v(" statement.  There are 11 tables total that need to be updated.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("wp_commentmeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("new_prefix_commentmeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("wp_comments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("new_prefix_comments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("wp_links"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("new_prefix_links"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("wp_options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("new_prefix_options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("wp_postmeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("new_prefix_postmeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("wp_posts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("new_prefix_posts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("wp_term_relationships"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("new_prefix_term_relationships"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("wp_term_taxonomy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("new_prefix_term_taxonomy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("wp_terms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("new_prefix_terms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("wp_usermeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("new_prefix_usermeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("wp_users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("new_prefix_users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"update-wp-user-roles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-wp-user-roles"}},[t._v("#")]),t._v(" Update wp_user_roles")]),t._v(" "),s("p",[t._v("There is an option in the options table called "),s("code",[t._v("wp_user_roles")]),t._v(" that you can see uses the "),s("code",[t._v("wp_")]),t._v(" prefix and needs to be updated.  The following statement accomplishes this.  You can see that since we have already changed the table name to the new prefix, we using the new table name in the statement.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("new_prefix_options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" option_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new_prefix_user_roles'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" option_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wp_user_roles'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"update-meta-keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-meta-keys"}},[t._v("#")]),t._v(" Update meta_keys")]),t._v(" "),s("p",[t._v("In the "),s("code",[t._v("usermeta")]),t._v(" table you can see that there are multiple records where the meta keys are using the original "),s("code",[t._v("wp_")]),t._v(" prefix.  Here's a statement that update all records that start with "),s("code",[t._v("wp_")]),t._v(" in the "),s("code",[t._v("meta_key")]),t._v(" column.  It's also using the "),s("code",[t._v("REPLACE")]),t._v(" method to replace the keys appropriately.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("new_prefix_usermeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" meta_key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meta_key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wp_'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new_prefix_'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" meta_key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wp_%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("And that's it!  A very simple way to update the WordPress table prefix post-installation.  One thing to note is that there are various plugins that may use the table prefix.  If any plugins are causing an issue after updating the prefix, then you will need to reactivate those plugins.  This will cause the plugin's settings to return to the default.  If plugin authors are smart, then they should be using their own custom prefix for any new tables or options.")])])}),[],!1,null,null,null);e.default=n.exports}}]);