;/*FB_PKG_DELIM*/

__d("CometProfilePlusLikeMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4867271226642619"}),null);
__d("CometProfilePlusLikeMutation.graphql",["CometProfilePlusLikeMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Variable",name:"data",variableName:"input"}],d=[{kind:"Literal",name:"action_type",value:"LIKE"}],e={args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"},f=[{kind:"Literal",name:"action_type",value:"FOLLOWING_STATUS"}],g={alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"is_viewer_fan",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"subscribe_status",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},k={kind:"TypeDiscriminator",abstractKey:"__isProfileAction"},l={alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},n={alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},o={kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometProfilePlusLikeMutation",selections:[{alias:null,args:c,concreteType:"PageLikeResponsePayload",kind:"LinkedField",name:"page_like",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_plus_for_delegate_page",plural:!1,selections:[{alias:null,args:d,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[e],storageKey:'profile_action(action_type:"LIKE")'},{alias:"following_status",args:f,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[e,g],storageKey:'profile_action(action_type:"FOLLOWING_STATUS")'}],storageKey:null},h,i],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometProfilePlusLikeMutation",selections:[{alias:null,args:c,concreteType:"PageLikeResponsePayload",kind:"LinkedField",name:"page_like",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_plus_for_delegate_page",plural:!1,selections:[{alias:null,args:d,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[j,k,l,m,n,o],storageKey:'profile_action(action_type:"LIKE")'},{alias:"following_status",args:f,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[j,k,l,m,n,o,g],storageKey:'profile_action(action_type:"FOLLOWING_STATUS")'},m],storageKey:null},h,i,m],storageKey:null}],storageKey:null}]},params:{id:b("CometProfilePlusLikeMutation_facebookRelayOperation"),metadata:{},name:"CometProfilePlusLikeMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("GraphQLFanFBPageActionOriginValueHackEnum",[],(function(a,b,c,d,e,f){a=Object.freeze({ads:"ads",collections_feed_megaphone:"collections_feed_megaphone",page_suggestions_on_liking:"page_suggestions_on_liking",page_suggestions_on_liking_refresh:"page_suggestions_on_liking_refresh",mobile_page_suggestions_on_liking:"mobile_page_suggestions_on_liking",page_suggestion:"page_suggestion",timeline_collection:"timeline_collection",timeline_lhc:"timeline_lhc",profile_edit:"profile_edit",profile_view:"profile_view",mobile_spyml:"mobile_spyml",registration:"registration",external_connect:"external_connect",mobile_ads:"mobile_ads",events:"events",profile_questions:"profile_questions",contextual_pyml:"contextual_pyml",topic_pyml:"topic_pyml",JEWEL_NOTIFICATION:"JEWEL_NOTIFICATION",locations_aggregation:"locations_aggregation",feed_share_link:"feed_share_link",api:"api",sms:"sms",favorites:"favorites",page_browser:"page_browser",mobile_page_browser:"mobile_page_browser",page_browser_chaining:"page_browser_chaining",page_browser_invite:"page_browser_invite",mobile_page_browser_invite:"mobile_page_browser_invite",reminder_box_invite:"reminder_box_invite",reminder_box_recommendation:"reminder_box_recommendation",page_creation:"page_creation",post_checkin:"post_checkin",from_get_offer_dialog:"from_get_offer_dialog",from_coupon_email:"from_coupon_email",hovercard:"hovercard",search:"search",web_search:"web_search",keyword_search:"keyword_search",qr_:"qr_",page_nax:"page_nax",page_profile:"page_profile",page_timeline:"page_timeline",page_invite_escape_hatch:"page_invite_escape_hatch",page_timeline_liked_pages:"page_timeline_liked_pages",page_finch_liked_pages:"page_finch_liked_pages",page_finch_related_pages:"page_finch_related_pages",page_similar_nearby_place:"page_similar_nearby_place",pending_page_invite_netego:"pending_page_invite_netego",like_story:"like_story",story_with_page:"story_with_page",liked_menu:"liked_menu",fan_context_story:"fan_context_story",social_graph:"social_graph",vertex_page:"vertex_page",sponsored_story:"sponsored_story",newsstand_suggestion:"newsstand_suggestion",app_center:"app_center",share_story:"share_story",share_page_story:"share_page_story",page_invite:"page_invite",discover_feed:"discover_feed",discover_tab:"discover_tab",recently_visited:"recently_visited",pages_your_friends_like:"pages_your_friends_like",saved_dashboard:"saved_dashboard",page_permalink:"page_permalink",guided_cleanup:"guided_cleanup",social_wifi:"social_wifi",country_page_like:"country_page_like",embed:"embed",gametime:"gametime",unknown:"unknown",unit_test:"unit_test",page_post_like_story:"page_post_like_story",mbasic_feed_post_like_chaining:"mbasic_feed_post_like_chaining",mbasic_feed_share_like_chaining:"mbasic_feed_share_like_chaining",mtouch_feed_post_like_chaining:"mtouch_feed_post_like_chaining",commerce_checkout_conf:"commerce_checkout_conf",feed_awesomizer_pyml:"feed_awesomizer_pyml",page_connection_questions:"page_connection_questions",awesomizer_discovery:"awesomizer_discovery",pages_liked_feed:"pages_liked_feed",banhammer:"banhammer",og_music:"og_music",soundcloud_share:"soundcloud_share",twitter_share:"twitter_share",internetorg_new_users:"internetorg_new_users",share_detected_topic:"share_detected_topic",feed_story:"feed_story",feed_connections_pyml:"feed_connections_pyml",timeline_like_chaining:"timeline_like_chaining",marketplace:"marketplace",local_serp:"local_serp",politicians_feed:"politicians_feed",feed_story_search:"feed_story_search",feed_pyml:"feed_pyml",network_ego:"network_ego",all_category_pyml:"all_category_pyml",content_based_pyml:"content_based_pyml",engagement_pyml:"engagement_pyml",games_pyml:"games_pyml",links_pyml:"links_pyml",music_pyml:"music_pyml",videos_pyml:"videos_pyml",page_pyml:"page_pyml",feed_all_category_pyml:"feed_all_category_pyml",rhc_all_category_pyml:"rhc_all_category_pyml",side_feed_all_category_pyml:"side_feed_all_category_pyml",other_all_category_pyml:"other_all_category_pyml",feed_chaining_related_pages:"feed_chaining_related_pages",feed_engagement_pyml:"feed_engagement_pyml",page_subscriptions:"page_subscriptions",feed_chaining:"feed_chaining",event_based_pyml:"event_based_pyml",comment_chaining:"comment_chaining",outbound_click_chaining:"outbound_click_chaining",share_chaining:"share_chaining",politician_pyml:"politician_pyml",politician_page_chaining_pyml:"politician_page_chaining_pyml",politician_page_chaining_pivot:"politician_page_chaining_pivot",mobile:"mobile",wap:"wap",silent_link:"silent_link",none:"none",page_migration:"page_migration",parent_child_migration:"parent_child_migration",fix_inconsistent_like:"fix_inconsistent_like",global_brand_v2_migration:"global_brand_v2_migration",global_brand_v2_child_switch:"global_brand_v2_child_switch",pagelike_adder_for_reactivated_users:"pagelike_adder_for_reactivated_users",pagelike_deleter_for_deactivated_users:"pagelike_deleter_for_deactivated_users",youtube_share_top:"youtube_share_top",youtube_share_tail:"youtube_share_tail",normal_unfan:"normal_unfan",si_system:"si_system",underage_fan_removal:"underage_fan_removal",deactivated_fan_removal:"deactivated_fan_removal",reactivated_fan_add:"reactivated_fan_add",launch_point_friend_invites:"launch_point_friend_invites",launch_point_liked_pages:"launch_point_liked_pages",launch_point_home_pyml:"launch_point_home_pyml",launch_point_discover_pyml:"launch_point_discover_pyml",launch_point_pending_page_invite:"launch_point_pending_page_invite",user_fundraiser_page:"user_fundraiser_page",page_suggestion_megaphone:"page_suggestion_megaphone",needy_page_suggestion_megaphone:"needy_page_suggestion_megaphone",wizard_suggestion:"wizard_suggestion",mobile_platform_native_like_button:"mobile_platform_native_like_button",end_of_feed:"end_of_feed",page_browser_tiled:"page_browser_tiled",nearby_dash:"nearby_dash",from_coupon:"from_coupon",video_flyout:"video_flyout",photo_snowlift:"photo_snowlift",finch_page_like_toast:"finch_page_like_toast",page_invite_escape_hatch_finch:"page_invite_escape_hatch_finch",ticker:"ticker",like_place:"like_place",external_page_like:"external_page_like",unconnected_story:"unconnected_story",pyml_story:"pyml_story",subscribe_story:"subscribe_story",profile_connect:"profile_connect",gifts_commerce_details_page:"gifts_commerce_details_page",contact_card:"contact_card",email:"email",global_brand_v2_unlinked_child_fan_restoration:"global_brand_v2_unlinked_child_fan_restoration",deactivated_fan_assoc_deleter:"deactivated_fan_assoc_deleter",report_afro:"report_afro",spam_account_removal:"spam_account_removal",welcome_dash:"welcome_dash",organic_pagepost_following_button:"organic_pagepost_following_button",retail_new_users:"retail_new_users",audience_alert:"audience_alert",counter_hate_speech_hub:"counter_hate_speech_hub",mobile_sponsored_page_you_may_like:"mobile_sponsored_page_you_may_like",recommended_pages:"recommended_pages",timeline:"timeline",nearby_search:"nearby_search",source_recommendation:"source_recommendation",invitations:"invitations",others:"others",medley:"medley",mobile_page_suggestion_megaphone:"mobile_page_suggestion_megaphone",PSYM:"PSYM",instant_articles:"instant_articles",local_news:"local_news",live_video:"live_video",feed_page_attachment:"feed_page_attachment",page_liked_by_teens:"page_liked_by_teens",feed_chaining_contextual_recommendations:"feed_chaining_contextual_recommendations",page_entity_lockup:"page_entity_lockup",jp_dap_pymf:"jp_dap_pymf",page_qr_code:"page_qr_code",japan_dap_interest_picker:"japan_dap_interest_picker",page_launchpad:"page_launchpad",instant_games_in_game_menu:"instant_games_in_game_menu",page_profile_like_as_page:"page_profile_like_as_page",page_surface_chevron_like_as_page:"page_surface_chevron_like_as_page",newsfeed_like_as_page:"newsfeed_like_as_page",serp_like_as_page:"serp_like_as_page",local_business_discovery:"local_business_discovery",watch_logged_out_msite:"watch_logged_out_msite",page_fan_upsell_bottomsheet:"page_fan_upsell_bottomsheet",pending_page_invite_upsell:"pending_page_invite_upsell",page_surface_iab_bar:"page_surface_iab_bar",page_admin_zero_fan_upsell:"page_admin_zero_fan_upsell",community_explore:"community_explore",soap_onboarding:"soap_onboarding"});f["default"]=a}),66);
__d("CometProfilePlusLikeMutation",["CometProfilePlusLikeMutation.graphql","CometRelay","GraphQLFanFBPageActionOriginValueHackEnum","ProfileActionFollowingMutationUtils","WebPixelRatio","getJSEnumSafe"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometProfilePlusLikeMutation.graphql");function a(a,b,e,f,g){g=c("getJSEnumSafe")(c("GraphQLFanFBPageActionOriginValueHackEnum"),g);d("CometRelay").commitMutation(a,{mutation:i,optimisticResponse:{page_like:{page:{id:b,is_viewer_fan:!0,profile_plus_for_delegate_page:{following_status:babelHelpers["extends"]({},d("ProfileActionFollowingMutationUtils").getOptimisticFollowingActionForSubscriptionStatus("REGULAR_FOLLOW",e),{is_active:!1}),id:e,profile_action:babelHelpers["extends"]({},d("ProfileActionFollowingMutationUtils").getOptimisticLikeActionForIsViewerFan(!0,e))},subscribe_status:"IS_SUBSCRIBED"}}},variables:{input:{is_tracking_encrypted:f!=null,page_id:b,source:g,tracking:f},scale:d("WebPixelRatio").get()}})}g.profilePlusLikeCommitMutationAction=a}),98);
__d("PagesPageActionClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744141");b=d("FalcoLoggerInternal").create("pages_page_action_click",a);e=b;g["default"]=e}),98);
__d("PagesCometGroupsTabRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="10078897415461564"}),null);