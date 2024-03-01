using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bullet : MonoBehaviour
{
    void Start()
    {
        
    }

    void Update()
    {
        transform.position += transform.forward * 0.1f;
    }

    private void OnTriggerEnter(Collider other)
    {
        Destroy(gameObject);
    }
}
