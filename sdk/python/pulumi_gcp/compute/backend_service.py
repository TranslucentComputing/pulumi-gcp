# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class BackendService(pulumi.CustomResource):
    """
    A Backend Service defines a group of virtual machines that will serve traffic for load balancing. For more information
    see [the official documentation](https://cloud.google.com/compute/docs/load-balancing/http/backend-service)
    and the [API](https://cloud.google.com/compute/docs/reference/latest/backendServices).
    
    For internal load balancing, use a [google_compute_region_backend_service](https://www.terraform.io/docs/providers/google/r/compute_region_backend_service.html).
    """
    def __init__(__self__, __name__, __opts__=None, backends=None, cdn_policy=None, connection_draining_timeout_sec=None, custom_request_headers=None, description=None, enable_cdn=None, health_checks=None, iap=None, name=None, port_name=None, project=None, protocol=None, security_policy=None, session_affinity=None, timeout_sec=None):
        """Create a BackendService resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['backends'] = backends

        __props__['cdn_policy'] = cdn_policy

        __props__['connection_draining_timeout_sec'] = connection_draining_timeout_sec

        __props__['custom_request_headers'] = custom_request_headers

        __props__['description'] = description

        __props__['enable_cdn'] = enable_cdn

        if not health_checks:
            raise TypeError('Missing required property health_checks')
        __props__['health_checks'] = health_checks

        __props__['iap'] = iap

        __props__['name'] = name

        __props__['port_name'] = port_name

        __props__['project'] = project

        __props__['protocol'] = protocol

        __props__['security_policy'] = security_policy

        __props__['session_affinity'] = session_affinity

        __props__['timeout_sec'] = timeout_sec

        __props__['fingerprint'] = None
        __props__['self_link'] = None

        super(BackendService, __self__).__init__(
            'gcp:compute/backendService:BackendService',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

