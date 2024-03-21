using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

public class wallMover : MonoBehaviour
{
    public float speed = 20.0f;
    private Rigidbody rb;
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }


    void Update()
    {
        transform.position -= new Vector3(0f, 0f, speed) * Time.deltaTime;
    }

	private void OnTriggerStay(Collider other)
	{
        GameObject go = other.gameObject;
        if (go != null)
        {
            Destroy(go);
        }
	}

	private void OnCollisionStay(Collision collision)
	{
		GameObject go = collision.gameObject;
		if (go != null)
		{
			Destroy(go);
		}
	}
}
